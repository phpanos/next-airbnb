export default function Link({ title, link }) {
    return (
        <li className="text-left" key={ title }><a href={ link } className="px-4 text-black py-3 flex text-sm bg-black bg-opacity-0 hover:bg-opacity-05">{ title }</a></li>
    )
}
