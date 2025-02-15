export interface MenuSidebarProps {
    section: {
        label: string,
        link: string,
        icon: React.ElementType,
        sub_section?: Array<{ label: string, link: string }>
    }
    className?: string
    iconSize?: number
}