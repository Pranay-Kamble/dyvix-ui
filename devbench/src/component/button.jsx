import { DyvixButton } from 'dyvix-ui';
import { DYVIX_GLOBAL_THEME } from 'dyvix-ui';
export function ButtonTest() {
  return (
    <>
      <DyvixButton onClick={() => console.log('clicked')}>Submit</DyvixButton>
    </>
  );
}
