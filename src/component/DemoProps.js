export default function DemoProps(props){
    return (
    <>
    <div>

        {props.job && <h1>Ohh You are computer guy</h1> }
    </div>
    <div>

        {!props.job && <h1>Ohh You are non computer guy</h1> }
    </div>
    </>
    )
}