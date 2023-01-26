
const MiComponente = ({ nombre }: MiComponenteProps) => {
    return (
        <p>Hola soy tu componente amigo {nombre}</p>
    )
}
interface MiComponenteProps {
    nombre: String;
}
export default MiComponente;

export function SegundoComponente() {
    return <h2>Soy tu segundo componente</h2>
}
