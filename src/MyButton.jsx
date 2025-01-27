/* MyButton.jsx */
export default function MyButton() {
    const handleClick = () => {
    console.log('Button clicked');
    };
    return (
    <button onClick={handleClick}>Click me</button>
    )
    }