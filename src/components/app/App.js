import React, {Suspense,} from 'react';
import './app.scss';
import SecureContainer from '../../containers/SecureContainer';
import Preloader from '../elements/preloader';
const Sign = React.lazy(() => import('../../components/pages/sign/Sign'));
const Private = React.lazy(() => import('../Private'));

const App = (props) => {
	return (
		<Suspense fallback={<Preloader size='l'/>}>
			<SecureContainer privateComponent={<Private/>}
							 publicComponent={<Sign/>}/>
		</Suspense>
	);
};
App.propTypes = {};
export default App;