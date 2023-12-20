export default function JsxDemo(){
    const attributes=(<div>Hello this is demo of attributes</div>)
  const links=(
  <>
  <div>This is demo Of children rendering</div>
  <a className='btn btn-primary' target='_blank' href='https://www.google.com'>Google</a>
  <a className='btn btn-warning' target='_blank' href='https://www.facebook.com'>Facebook</a>
  <a className='btn btn-danger' target='_blank' href='https://www.instagram.com'>Instagram</a>
  </>
  );
    return (
    <>
    {attributes}<br/>
      {links}<br/>
    </>)
}