/**
 * @typedef {Object} CardProps
 * @property {React.ReactNode} header - The header of the card.
 * @property {React.ReactNode} footer - The footer of the card.
 * @property {React.ReactNode} children - The children of the card.
 */

export const Card = ({ header, footer, children }) => {
  <div className="card">
    {header && <div>{header}</div>}
    {children}
    {footer && <div>{footer}</div>}
  </div>
}

/**
 * Usage:
 * <Card
 *   header={<div>Header</div>}
 *   footer={<div>Footer</div>}
 * >
 *   <div>Content</div>
 * </Card>
 */