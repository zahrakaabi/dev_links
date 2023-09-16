/* -------------------------------------------------------- */
/*                        DEPENDENCIES                      */
/* -------------------------------------------------------- */
// SEO
import SEO from '../../shared/SEO';

// Styles
import './index.scss';

/* -------------------------------------------------------- */
/*                         COMPONENT                        */
/* -------------------------------------------------------- */
function App() {
  /* ********************* RENDERING ********************** */ 
  return (
    <>
        <SEO
            title='Home | RBK Front-end Challenge'
            description='RBK front-end Challenge'
            name='home'
        />

        <div> Hello World </div>
    </>
  )
}

export default App;