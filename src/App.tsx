import './App.css';
import StringTypes from './components/StringTypes';
import NumberTypes from './components/NumberTypes';
import BooleanTypes from './components/BooleanTypes';
import ArrayTypes from './components/ArrayTypes';
import ObjectTypes from './components/ObjectTypes';
import StatusTypes from './components/StatusTypes';
import ChildrenTypes from './components/ChildrenTypes';
import OptionalTypes from './components/OptionalTypes';
import ClickEventTypes from './components/ClickEventTypes';
import UseState from './components/state/UseState';
import UseContext from './components/state/UseContext';

function App() {
  const friends = [
    {
      id: 1,
      name: 'murshed'
    },
    {
      id: 1,
      name: 'sakin'
    },
    {
      id: 1,
      name: 'rasel'
    },
    {
      id: 1,
      name: 'nafisa'
    }
  ]
  const company = {
    name: 'Technext Limited',
    location: '14th floor, Elegant Shopping Mall, Sylhet'
  }
  return (
    <div className="App" style={{ padding: '20px 0px' }}>
      <h1>React Typescript All Types</h1>
      <StringTypes name="sourav" />
      <NumberTypes number={10} />
      <BooleanTypes isLoggedIn={true} />
      <ArrayTypes friends={friends} />
      <ObjectTypes company={company} />
      <StatusTypes status='loading' />
      <ChildrenTypes>
        <StringTypes name="sourav" />
      </ChildrenTypes>
      <OptionalTypes />
      <ClickEventTypes handleClick={(event) => {
        alert('Button clicked')
      }} />
      <UseState />
      <UseContext />
    </div>
  );
}

export default App;
