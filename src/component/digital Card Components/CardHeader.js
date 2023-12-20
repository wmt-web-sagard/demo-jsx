import './css/CardHeader.css'
export default function CardHeader(){
    return(
        <div>
            <img className='person-img img-fluid' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Personal Image"
                />
            <div className='row'>
                <div className='col fs-1'>Sagar Dhoriya</div>
            </div>
            <div className='row'>
                <div className='col fs-5'>Fullstack Developer</div>
            </div>
        </div>
    )
}