import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div><center>
      <form onSubmit={vocales}>
      <p>Ingrese un texto:</p><hr class="border border-primary border-2 opacity.25"></hr>
        <input type="text" name="texto"></input><br></br><hr class="border border-primary border-2 opacity.25"></hr>
        <button type="button" class="btn btn-outline-primary">Subir</button>
      </form>
      </center>
    </div>

  )
}

function vocales(e){
  e.preventDefault();
  const texto = e.target.texto.value;
  const vocales = 'aeiouAEIOU';
  let contador = 0;
  for(let i = 0; i<texto.length; i++){
    if(vocales.includes(texto[i])) contador++;
  }

  alert("Cantidad de vocales: "+contador);
}
export default App;
