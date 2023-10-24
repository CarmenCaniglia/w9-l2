import Alert from 'react-bootstrap/Alert';

function Welcome(props) {
  return (
    <>
      {[
        'primary'
       
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Iscriviti alla nostra newsletter per scoprire le ultime novità!!!
        </Alert>
      ))}
    </>
  );
}

export default Welcome;