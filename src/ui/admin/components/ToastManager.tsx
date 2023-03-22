import React from 'react';
import { Toast } from 'react-bootstrap';
import ReactDOM from 'react-dom';

interface ToastOptions {
    id?: string;
    title: string;
    content: string;
    type?: 'primary' | 'info' | 'warning' | 'error'
    duration?: number;
    destroy?: () => void;
}

export class ToastManager {
    private containerRef: HTMLDivElement;
    private toasts: ToastOptions[] = [];

    constructor() {
        const body = document.getElementsByTagName('body')[0] as HTMLBodyElement;
        const toastContainer = document.createElement('div') as HTMLDivElement;
        toastContainer.id = 'toast-container-main';
        toastContainer.className = 'toast-container position-absolute top-0 end-0 p-3';
        body.insertAdjacentElement('beforeend', toastContainer);
        this.containerRef = toastContainer;
    }

    public show(options: ToastOptions): void {
        const toastId = Math.random().toString(36).substr(2, 9);
        const toast: ToastOptions = {
            id: toastId,
            ...options, // if id is passed within options, it will overwrite the auto-generated one
            destroy: () => this.destroy(options.id ?? toastId),
        };

        this.toasts = [toast, ...this.toasts];
        this.render();
    }

    public destroy(id?: string): void {
        this.toasts = this.toasts.filter((toast: ToastOptions) => toast.id !== id);
        this.render();
    }

    private render(): void {
        const toastsList = this.toasts.map((toastProps: ToastOptions) => (
            <Toast
                key={toastProps.id}
                onClose={() => this.destroy(toastProps.id)}
                delay={10000}
                autohide={true}
                bg={toastProps.type}
            >
                {
                    toastProps.title && (
                        <Toast.Header>
                            <strong className="me-auto">{toastProps.title}</strong>
                        </Toast.Header>
                    )
                }
                <Toast.Body>{toastProps.content}</Toast.Body>
            </Toast>
        ));
        ReactDOM.render(toastsList, this.containerRef);
    }
}

export const toast = new ToastManager();