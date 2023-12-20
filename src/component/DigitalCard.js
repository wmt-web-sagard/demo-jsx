import './css/digitalcard.css'
import CardHeader from './digital Card Components/CardHeader'

export default function DigitalCard(){
    return(
        <div className=" vh-100 w-100 d-flex justify-content-center align-items-center">
            <div className="wrapperDiv">
                <CardHeader/>
            </div>
        </div>
    )
}