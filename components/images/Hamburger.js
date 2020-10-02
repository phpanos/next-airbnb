export default function Hamburger () {
    const styles = {
        display: 'block',
        width: '16px',
        height: '16px',
        fill: 'none',
        strokeWidth: '3',
        stroke: 'currentcolor',
        overflow: 'hidden',
    }
    return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={ styles }><g fill="none" fillRule="nonzero"><path d="m2 16h28"></path><path d="m2 24h28"></path><path d="m2 8h28"></path></g></svg>
    )
}
