import Link from './Link'

export default function PopupMenu() {
    const items = [
        {
            title: 'Item 1 and what happens if this content is a bit longer hehae hear heae eah eha hea he',
            link: 'https://google.se',
        },
        {
            title: 'Item 2',
            link: 'https://google.se',
        },
        {
            title: 'Item 3',
            link: 'https://google.se',
        }
    ]

    return (
        <div className="bg-white rounded-lg bg-opacity py-2 absolute top-100 right-0 mt-4 w-300 min-w-150 max-w-content">
            <ul>
                { items.map(( item ) => {
                    return <Link title={ item.title } link={ item.link }  />
                })}
            </ul>
        </div>
    )
}
