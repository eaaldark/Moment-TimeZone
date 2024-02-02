import moment from 'moment-timezone';
import './App.css';

function App() {
  const timezone = moment.tz.guess();
  const now = moment();
  const offset = now.tz(timezone).format('Z');

  console.log(moment.tz.names());
  const datenative = new Date();

  const convert = moment.utc(datenative).tz(timezone).format();
  return (
    <>
      <p>Zona Horaria {timezone}</p>
      <p>Diferencia Horaria {offset}</p>
      <p>Fecha UTC Javascript {datenative.toISOString()}</p>
      <p>Fecha UTC Moment-Timezone {convert}</p>
    </>
  );
}

export default App;
