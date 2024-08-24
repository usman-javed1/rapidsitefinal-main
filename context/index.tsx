// contexts/ClientEditorContext.tsx

"use client"
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';

interface ClientEditorContextProps {
    siteContent: string;
    setSiteContent: React.Dispatch<React.SetStateAction<string>>;
    zoom: number;
    setZoom: React.Dispatch<React.SetStateAction<number>>;
    isPickMode: boolean;
    setIsPickMode: React.Dispatch<React.SetStateAction<boolean>>;
    isEditMode: boolean;
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    hoveredElement: Element | null;
    setHoveredElement: React.Dispatch<React.SetStateAction<Element | null>>;
    selectedElement: Element | null;
    setSelectedElement: React.Dispatch<React.SetStateAction<Element | null>>;
    isAnyElementSelected: boolean;
    setIsAnyElementSelected: React.Dispatch<React.SetStateAction<boolean>>;
    clickPosition: { x: number; y: number } | null;
    setClickPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number } | null>>;
    iframeRef: React.RefObject<HTMLIFrameElement>;
    handleMouseOver: (e: MouseEvent) => void;
    handleMouseOut: (e: MouseEvent) => void;
    handleClick: (e: MouseEvent) => void;
    handleZoomIn: () => void;
    handleZoomOut: () => void;
    togglePickMode: () => void;
    toggleEditMode: () => void;
    handleSave: () => void;
}

const ClientEditorContext = createContext<ClientEditorContextProps | undefined>(undefined);

export const useClientEditor = () => {
    const context = useContext(ClientEditorContext);
    if (!context) {
        throw new Error('useClientEditor must be used within a ClientEditorProvider');
    }
    return context;
};

export const ClientEditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [siteContent, setSiteContent] = useState<string>('');
    const [zoom, setZoom] = useState(100);
    const [isPickMode, setIsPickMode] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [hoveredElement, setHoveredElement] = useState<Element | null>(null);
    const [selectedElement, setSelectedElement] = useState<Element | null>(null);
    const [isAnyElementSelected, setIsAnyElementSelected] = useState(false);
    const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const handleLoad = () => {
            const iframeDoc = iframe.contentDocument;
            if (!iframeDoc) return;

            iframeDoc.open();
            iframeDoc.write(siteContent);
            iframeDoc.close();

            const tailwindLink = iframeDoc.createElement('link');
            tailwindLink.rel = 'stylesheet';
            tailwindLink.href =
                'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
            iframeDoc.head.appendChild(tailwindLink);
            updateEventListeners(iframeDoc);
        };

        const updateEventListeners = (iframeDoc: Document) => {
            removeEventListeners(iframeDoc);
            if (isPickMode || isEditMode) {
                addEventListeners(iframeDoc);
            }
        };

        const addEventListeners = (doc: Document) => {
            if (doc.body) {
                doc.body.addEventListener('mouseover', handleMouseOver);
                doc.body.addEventListener('mouseout', handleMouseOut);
                doc.body.addEventListener('click', handleClick);
            }
        };

        const removeEventListeners = (doc: Document) => {
            if (doc.body) {
                doc.body.removeEventListener('mouseover', handleMouseOver);
                doc.body.removeEventListener('mouseout', handleMouseOut);
                doc.body.removeEventListener('click', handleClick);
            }
        };

        if (iframe.contentDocument?.readyState === 'complete') {
            handleLoad();
        } else {
            iframe.addEventListener('load', handleLoad);
        }

        return () => {
            iframe.removeEventListener('load', handleLoad);
            const iframeDoc = iframe.contentDocument;
            if (iframeDoc) {
                removeEventListeners(iframeDoc);
            }
        };
    }, [siteContent, isPickMode, isEditMode]);

    const handleMouseOver = (e: MouseEvent) => {
        if ((!isPickMode && !isEditMode) || isAnyElementSelected) return;
        e.stopPropagation();
        const target = e.target as Element;
        setHoveredElement(target);
        target.classList.add('hovered-element');
    };

    const handleMouseOut = (e: MouseEvent) => {
        if (!isPickMode && !isEditMode) return;
        const target = e.target as Element;
        target.classList.remove('hovered-element');
        setHoveredElement(null);
    };

    const handleClick = (e: MouseEvent) => {
        if (selectedElement) {
            setSelectedElement(null);
            setClickPosition(null);
            setIsAnyElementSelected(false);
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        const target = e.target as Element;
        setSelectedElement(target);
        setClickPosition({ x: e.clientX, y: e.clientY });
        setIsAnyElementSelected(true);
        if (isEditMode) {
            if (target.tagName === 'IMG') {
                handleImageEdit(target);
            } else if (
                ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'DIV'].includes(
                    target.tagName
                )
            ) {
                handleTextEdit(target);
            }
        }
    };

    const handleImageEdit = (target: Element) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async (event) => {
            const file = (event.target as HTMLInputElement).files?.[0];
            if (file) {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('website_id', ''); // Replace with your websiteId
                formData.append('user_id', ''); // Replace with your userId

                const response = await fetch('/api/upload_image', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    toast.error('Error uploading image');
                    toast.error('error: ' + response.statusText);
                    return;
                }

                const { imageUrl } = await response.json();
                if (imageUrl) {
                    (target as HTMLImageElement).src = imageUrl;
                    updateElementAttribute(target, 'src', imageUrl);
                }
            }
        };
        input.click();
    };

    const handleTextEdit = (target: Element) => {
        target.setAttribute('contenteditable', 'true');
        (target as HTMLElement).focus();
        const handleBlur = () => {
            target.removeAttribute('contenteditable');
            updateElementContent(target);
            target.removeEventListener('blur', handleBlur);
            setSelectedElement(null);
            setIsAnyElementSelected(false);
        };
        target.addEventListener('blur', handleBlur);
    };

    const updateElementAttribute = (
        element: Element,
        attribute: string,
        value: string
    ) => {
        const updatedContent = updateElementInHTML(element, (el) => {
            el.setAttribute(attribute, value);
            return el.outerHTML;
        });
        setSiteContent(updatedContent);
    };

    const updateElementContent = (element: Element) => {
        const updatedContent = updateElementInHTML(element, (el) => {
            el.textContent = element.textContent;
            return el.outerHTML;
        });
        setSiteContent(updatedContent);
    };

    const updateElementInHTML = (
        element: Element,
        updateFn: (el: Element) => string
    ): string => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(siteContent, 'text/html');
        const xpath = getXPath(element);
        const result = doc.evaluate(
            xpath,
            doc,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        if (result.singleNodeValue) {
            const nodeAsElement = result.singleNodeValue as HTMLElement;
            const updatedElement = updateFn(nodeAsElement);
            nodeAsElement.outerHTML = updatedElement;
            return doc.documentElement.outerHTML;
        }
        return siteContent;
    };

    const getXPath = (element: Element): string => {
        if (element.id !== '') {
            return `//*[@id="${element.id}"]`;
        }
        if (element === document.body) {
            return '/html/body';
        }
        let ix = 0;
        const siblings = element.parentNode?.childNodes || [];
        for (let i = 0; i < siblings.length; i++) {
            const sibling = siblings[i];
            if (sibling === element) {
                return (
                    getXPath(element.parentNode as Element) +
                    '/' +
                    element.tagName.toLowerCase() +
                    '[' +
                    (ix + 1) +
                    ']'
                );
            }
            if (
                sibling.nodeType === 1 &&
                (sibling as Element).tagName === element.tagName
            ) {
                ix++;
            }
        }
        return '';
    };

    const handleZoomIn = () => setZoom((prev) => Math.min(prev + 10, 200));
    const handleZoomOut = () => setZoom((prev) => Math.max(prev - 10, 50));
    const togglePickMode = () => {
        setIsPickMode(!isPickMode);
        setIsEditMode(false);
    };
    const toggleEditMode = () => {
        const iframeDoc = iframeRef.current?.contentDocument;
        if (iframeDoc) {
            const updatedContent = iframeDoc.body.innerHTML;
            setSiteContent(updatedContent);
        }
        setIsEditMode(!isEditMode);
        setIsPickMode(false);
    };

    const handleSave = async () => {
        const iframeDoc = iframeRef.current?.contentDocument;
        if (iframeDoc) {
            const updatedContent = iframeDoc.body.innerHTML;
            setSiteContent(updatedContent);
            const response = fetch('/api/save', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    userId: '', // Replace with your userId
                    content: updatedContent,
                    title: 'home', // Pass the websiteId
                }),
            });
            toast.promise(response, {
                loading: 'Saving...',
                success: 'Site saved!',
                error: 'Error saving site',
            });
        }
    };

    return (
        <ClientEditorContext.Provider
            value={{
                siteContent,
                setSiteContent,
                zoom,
                setZoom,
                isPickMode,
                setIsPickMode,
                isEditMode,
                setIsEditMode,
                hoveredElement,
                setHoveredElement,
                selectedElement,
                setSelectedElement,
                isAnyElementSelected,
                setIsAnyElementSelected,
                clickPosition,
                setClickPosition,
                iframeRef,
                handleMouseOver,
                handleMouseOut,
                handleClick,
                handleZoomIn,
                handleZoomOut,
                togglePickMode,
                toggleEditMode,
                handleSave,
            }}
        >
            {children}
        </ClientEditorContext.Provider>
    );
};
