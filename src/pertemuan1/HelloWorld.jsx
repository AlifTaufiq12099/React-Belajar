export default function HelloWorld() {
  const  propsusercard = {
    nama: "Alif",
    nim: "2455301021",
    tanggal : new Date().toLocaleDateString()
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <h1>day 1 belajar java script!</h1>
      <Grettingbinjai/>
      <QouteText/>
      {/* <UserCard nama="Alfian" 
      nim="123456789" 
      tanggal={new Date().toLocaleDateString()}/>
      <UserCard {...propsusercard}/>   */}
      <img src="img/meme.jpg" alt="logo" />
    </div>
    
  );


}
function Grettingbinjai() {
  return (
    <small>salam dari binjai anjay</small>
  );
}

function QouteText() {
  const text = "The only way to do great work is to love what you do.";
  const text2  = "- Steve Jobs -" ;
  return (
    <div>
      <p>"{text.toLowerCase()}"</p>
      <cite>{text2.toUpperCase()}</cite>
    </div>
  );
}
function UserCard(props) {
  return (
    <div>
      <h3>Nama: {props.nama} </h3>
      <p>Nim: {props.nim}</p>
      <p>Tanggal: {props.tanggal}</p>
    </div>
  );
};
