export default function Link({ title, link }) {
    return (
        <li className="text-left"><a href={ link } className="px-4 py-3 flex text-sm bg-black bg-opacity-0 hover:bg-opacity-05">{ title }</a></li>
    )
}
