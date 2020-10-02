import Link from './Link'

export default function PopupMenu({visibility, items}) {
    return (
        <div className={`${visibility ? 'block' : 'hidden'} bg-white focus:outline-none rounded-lg bg-opacity py-2 absolute top-100 right-0 mt-4 w-300 min-w-150 max-w-content`}>
            <ul>
                { items.map(( item ) => {
                    return <Link key={item.title} title={ item.title } link={ item.link }  />
                })}
            </ul>
        </div>
    )
}
