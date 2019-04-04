import React, {Suspense,} from 'react';
import './app.scss';
import SecureContainer from 'containers/SecureContainer';
import Preloader from '../elements/preloader';
import {connect} from 'react-redux';
import InfoContainer from '../../containers/InfoContainer';
import {BrowserRouter} from 'react-router-dom';

const Sign = React.lazy(() => import('components/pages/sign/Sign'));
const Private = React.lazy(() => import('../Private'));

const App = (props) => {
	return (
		<Suspense fallback={<Preloader size='l'/>}>
			<SecureContainer privateComponent={
				<BrowserRouter>
					<Private/>
				</BrowserRouter>
			}
							 publicComponent={<Sign/>}/>
			<InfoContainer/>
		</Suspense>
	);
};
const mapStateToProps = ({error}) => {
	return {};
};
export default connect(mapStateToProps)(App);