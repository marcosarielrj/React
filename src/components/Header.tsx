type Props = {
    name: string;
    age: number;
}

export const Header = ({name, age}: Props) => {
    return(
        <header>
            <h1>Algum Titulo {name} interessante {age}.</h1>
        </header>
    )

}