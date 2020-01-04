import React from 'react'

export type LoadingOverLayProps = {
    active: boolean,
    fadeSpeed?: number,
    onClick?: () => void,
    className?: string,
    classNamePrefix?: string,
    spinner?: boolean | React.ReactNode,
    text?: React.ReactNode,
    styles?: {
        content: () => void,
        overlay: () => void,
        spinner: () => void,
        wrapper: () => void
    }
}

export type LoadingOverlayState = {
    overflowCSS?: {
        overflow?: string,
        overflowX?: string,
        overflowY?: string
    }
}

export type LoadingOverlayDefaultProps = {
    classNamePrefix: string,
    fadeSpeed: number,
    styles: {}
}
