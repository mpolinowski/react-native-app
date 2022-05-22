# React Native Hello World

<!-- TOC -->

- [React Native Hello World](#react-native-hello-world)
	- [Setup](#setup)
	- [Hello World](#hello-world)
		- [Styling](#styling)
		- [API Access](#api-access)
	- [Adding Click Event Handler](#adding-click-event-handler)

<!-- /TOC -->


[Github Repository](https://github.com/mpolinowski/)


## Setup

```bash
npm install -g expo-cli react-native-cli styled-components axios
expo init client
```

Choose the __blank__ template and run the client:


```bash
cd client
npm start
```

I can test code by scanning the QR Code using the __Expo Go__ app under Android or by pressing the `w` key to activate a web preview.


> `error:0308010C:digital envelope routines::unsupported`: Newer versions of Node.js use OpenSSLv3 that brought some [breaking changes](https://wiki.openssl.org/index.php/OpenSSL_3.0#Upgrading_to_OpenSSL_3.0_from_OpenSSL_1.0.2). Can be fixed (__>=Nodejs v17__) by adding the following option to the start script inside your `package.json` -> `"start": "export NODE_OPTIONS=--openssl-legacy-provider && expo start"`

## Hello World

The Expo CLI gave us a basic app boiler plate that we can  now edit. Start by removing the content of `App.js` (or `index.js`) and add the following:

```jsx
import React from 'react'
import Home from './src/screens/Home';

const App = () => {
	return (
		<Home />
	)
}

export default App
```

And create the `./src/screens/Home.js` component:

```jsx
import React from 'react'
import {Text} from 'react-native'

const Home = () => {
	return (
		<Text>
			Hi There!
		</Text>
	)
}

export default Home
```

Check the output inside your browser - there should be a small `Hi There!` displayed in the top right.


### Styling
We can now use Styled Components to create a few components to fill our home screen with. We will store them in `./src/components`.


`./Header.js`

```jsx
import React from 'react'
import {Text, View} from 'react-native'
import styled from 'styled-components/native';

const InputField = styled(View)`
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 70px;
	padding: 5%;
	background-color: dodgerblue;
	margin-bottom: 5%;
`

const InputText = styled(Text)`
	font-weight: 500;
	font-size: 22px;
	color: white;
`

const Header = () => {
	return (
		<InputField>
			<InputText>Header</InputText>
		</InputField>
	)
}

export default Header
```


### API Access
We can use an online API to fill our basic app with some data. For example:

```bash
https://givecars.herokuapp.com
```

This URL returns the following JSON object:

```json
[{"brand":"ford","model":[{"name":"Mustang","url":"https://www.ford.com/cars/mustang/","image":"https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2019/collections/highlights/3-2/19mst_highlight_thefeel_219.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"},{"name":"f950","url":"https://www.ford.com/commercial-trucks/f650-f750/","image":"https://i.pinimg.com/originals/a8/4c/84/a84c84175bf1c7ed023720e4c390617e.jpg"},{"name":"gt","url":"https://www.ford.com/performance/gt/","image":"https://cdn.motor1.com/images/mgl/o8V7q/s1/2019-ford-gt-carbon-series.jpg"}]},{"brand":"bmw","model":[{"name":"8","url":"https://www.bmw.com/en/bmw-models/bmw-8-series-gran-coupe.html","image":"https://www.bmw.com.tr/content/dam/bmw/common/all-models/8-series/coupe/2018/at-a-glance/bmw-8series-coupe-sp-xxl.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1527669998791.jpg"},{"name":"vision","url":"https://www.bmw.com/en/innovation/bmw-vision-m-next.html","image":"https://images.netdirector.co.uk/gforces-auto/image/upload/w_412,h_309,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/295730c6112ec306b0369316ee3843c5/the_bmw_vision_next_100_2.jpeg"}]},{"brand":"mercedes","model":[{"name":"cla","url":"https://www.mercedes-benz.com/en/mercedes-benz/vehicles/passenger-cars/cla/","image":"https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/cla/cla-coupe/explore/concept-intro/_jcr_content/contentgallerycontainer/par/contentgallery_c8fa/par/contentgallerytile_e/image.MQ6.8.20180122133037.jpeg"},{"name":"slc","url":"https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/slc/slc-roadster/explore.html","image":"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my19/slc/byo/options/2019-SLC-ROADSTER-013.jpg"}]},{"brand":"audi","model":[{"name":"a4","url":"https://www.audi.com/en/experience-audi/models-and-technology/serial-models/a4.html","image":"https://www.audi.com.tr/dam/nemo/models/a4/a4-limousine/my-2019/1920x1080_MTC_XL/1920x1080_MTC_framed_AA4_L_181015.jpg"},{"name":"aime","url":"https://www.audi.com/en/experience-audi/models-and-technology/concept-cars/audi-aime.html","image":"https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/concept-cars/2019/aime/1920x600-desktop-concept-cars-audi-aime-2019-teaser.jpg?"}]}]
```


The `axios` library allows us to async get the JSON data the API provides in `componentDidMount`.

`./ResultList.jsx`

```jsx
import React from 'react'
import {ScrollView} from 'react-native'
import axios from 'axios'

import ResultDetails from './ResultDetails'

class ResultList extends React.Component {

	constructor() {
			super()
			this.state = { resultList: [] }
	}

	componentDidMount() {
		axios.get('https://givecars.herokuapp.com/')
		.then((response) => {
		this.setState({ resultList: response.data })
		})
	}

	renderList = () => {
		return this.state.resultList.map((brand) => {
		return <ResultDetails brand={brand} key={brand.model[0].name} />
		})
	}

	render() {
		return (
			<ScrollView>
				{ this.renderList() }
			</ScrollView>
		)
	}
}


export default ResultList
```


`./ResultDetails.jsx`

```jsx
import React from 'react'
import {Text, View} from 'react-native'

const ResultDetails = (props) => {
	return (
		<View>
			<Text>{props.brand.model[0].name}</Text>
		</View>
	)
}

export default ResultDetails
```

## Adding Click Event Handler
We want to add a button that will when pressed open the selected Homepage URL inside the mobile web browser. ReactNative offers a component called `Linking` that we can use to accomplish this:

```jsx
import {Linking} from 'react-native'

...

<Button
	buttonPress = {() => {
		Linking.openURL(brand.model[0].url)
}} />
```

The button component used here is build using the `TouchableOpacity` component:

```jsx
import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

const Button = (props) => {
	return (
		<TouchableOpacity onPress={props.buttonPress}>
			<Text>Click Me!</Text>
		</TouchableOpacity>
	)

}

export default Button
```
