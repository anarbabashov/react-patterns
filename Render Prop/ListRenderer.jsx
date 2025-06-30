/**
 * @typedef {Object} ListRendererProps
 * @property {Array} items - The list of items to render.
 * @property {Function} render - The function to render each item.
 */

export const ListRenderer = ({ items, render }) => {
  return (
    <ul className="list-renderer">
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

/**
 * Usage
 * <ListRenderer items={items} render={(item) => <div key={item.id}>{item}</div>} />
 */