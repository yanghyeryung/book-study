# 빠른 모바일 앱 개발을 위한 React Native 2/E / 인사이트
## 리액트 네이티브란
- iOS와 안드로이드에서 동작하는 네이티브 모바일 앱을 만드는 자바스크립트 프레임워크
- 페이스북, 에어비앤비, 월마트, 바이두에서 리액트 네이티브로 만든 앱 제공 

### 이점
- 대상 플랫폼의 표준 렌더링 API를 사용
    - HTML, CSS로 만든 웹뷰는 성능이 떨어지고, 대상 플랫폼의 UI 요소들을 사용하지 않음.
    - 리액트 네이티브는 마크업을 플랫폼에 따라 네이티브 엘리먼트로 전환
- 강력한 개발자 도구와 에러 리포팅 기능을 제공
- 모바일 앱을 개발하는데 필요한 리소스를 줄일 수 있음.

### 단점
- 추가적인 레이어가 있어서 디버깅이 어려움.
- 대상 플랫폼의 새로운 버전을 지원하는데 시간 필요

### 리액트 네이티브의 동작방식
- 리액트는 페이지의 변화를 가상 DOM에서 차이점을 계산하여 최소한의 변경사항만 렌더링
- 리액트 네이티브의 `브릿지`가 대상 플랫폼의 네이티브 UI요소에 접근하는 인터페이스를 제공 
- 리액트 네이티브에서 가상 DOM을 네이티브 API를 호출하여 렌더링

### 리액트 네이티브 컴포넌트
- 리액트 네이티브는 플랫폼에 종속적인 리액트 컴포넌트를 사용 `예)<View>, <Text>, <Image>`
- JSX 사용 
- 자바스크립트 객체로 존재하는 인라인 스타일을 사용 

## [나의 첫 어플리케이션 만들기](https://github.com/yanghyeryung/book-study/tree/master/react-native/03)

### 개발 환경설정
#### Create React Native App
- 자바스크립트만 사용하는 앱을 지원
- npm install -g create-react-native-app
- npm install -g expo-cli [리액트 네이티브 문서](https://facebook.github.io/react-native/docs/getting-started.html)
- create-react-native-app first-project 
- npm start
- Expo 앱을 사용하여 스마트폰에서 실행 가능 (컴퓨터와 스마트폰이 같은 네트워크 접속시)

#### React Native
- 네이티브 코드를 함께 사용하는 앱을 지원 
- npm install -g react-native-cli
- 플랫폼별 설치 항목 [리액트 네이티브 문서](https://facebook.github.io/react-native/docs/getting-started.html)
    - ios 개발환경 (Xcode)
    - 안드로이드 개발환경 (JDK, 안드로이드 SDK, 안드로이드 스튜디오)
- react-native init FirstProject
- react-native run-ios
- react-native run-android

### 샘플코드 
- 사용하려는 네이티브로 제공되는 모듈을 모두 명시적으로 import
```
import {StyleSheet, Text, View, TextInput, ImageBackground} from 'react-native';
```

- 스타일은 스타일 객체를 통해 작성
    - flexbox를 이용하여 비율에 따른 레이아웃 지정 가능
    - flexDirection으로 배치를 지정 가능 (column: ↓ , row: →)
    - alignItems로 정렬 지정 가능

```
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },
    backdrop: {
        flex: 1,
        flexDirection: 'column'
    },
    overlay: {
        paddingTop: 5,
        backgroundColor: '#000',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        padding: 30
    },
});
```

- TextInput 컴포넌트로 사용자 입력 처리
```
<TextInput
    style={[styles.zipCode, styles.mainText]}
    onSubmitEditing={e => this._handleTextChange(e)}>
</TextInput>
```

- Fetch API를 이용한 Ajax 요청 처리
```
function fetchForecast(zip) {
    return fetch(zipUrl(zip))
        .then(response => response.json())
        .then(responseJSON => {
            return {
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp,
            };
        })
        .catch(error => {
            console.log(error);
        })
}
```

- ImageBackground 컴포넌트로 배경 이미지 처리 
```
<ImageBackground
    source={require('./assets/flowers.png')}
    style={styles.backdrop}
>
...
</ImageBackground>
```

## [모바일 컴포넌트](https://github.com/yanghyeryung/book-study/tree/master/react-native/04) 
### 기본 컴포넌트

#### `<Text>`
- 리액트 네이티브는 `<Text>` 컴포넌트만이 텍스트 노드를 자식으로 갖음
- 리액트 네이티브는 같은 스타일을 반복적으로 적용해야 할 경우 컴포넌트의 재사용을 권장

```
class Em extends Component {
    render() {
        return(
            <Text style={styles.italic}>{this.props.children}</Text>
        );
    }
}
```

```
<Text>
    The quick <Em>brown</Em>
</Text>
```

#### `<Image>`
- 파일명.ios.png, 파일명.androig.png로 파일명을 지정하면 플랫폼에 해당하는 이미지 사용
- 파일명@2x.png, 파일명@3x.png로 파일명을 지정하면 디바이스 화면 밀도에 맞는 이미지 사용 
- 웹에 있는 이미지 소스를 사용해야 할 경우 이미지 사이즈를 따로 지정

```
<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 400, height: 400}}/>
```

### 터치와 제스쳐 컴포넌트

#### `<TouchableHighlight>`

- 뷰가 터치될때 오버레이를 추가하여 사용자에게 시각적 피드백 제공 
- onPressIn, onPressOut, onLongPress 콜백 제공 

```
render() {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                onPressIn={this._onPressIn}
                onPressOut={this._onPressOut}
                style={styles.touchable}>
                <View style={styles.button}>
                    <Text style={styles.welcome}>
                        {this.state.pressing ? 'EEK!' : 'PUSH ME'}
                    </Text>
                </View>
            </TouchableHighlight>
        </View>
    );
}
```

#### `PanResponder`

- 컴포넌트가 아닌 클래스
- 현재 제스처의 속도, 누적 이동거리 등의 원시 위치 데이터에 접근 가능
- PanResponder 객체 생성시 콜백함수를 지정
    - onStartShouldSetPanResponder: 터치 이벤트에 반응할지 결정
    - onMoveShouldSetPanResponder: 터치 이벤트에 반응할지 결정
    - onPanResponderGrant: 터치 이벤트 발생시 실행
    - onPanResponderMove: 터치 이벤트 진행중 실행
    - onPanResponderRelease: 터치 이벤트 끝날때 실행 
    - onPanResponderTerminate: 터치 이벤트 끝날때 실행 

```
this._panResponder = PanResponder.create({
    onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
    onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
    onPanResponderGrant: this._handlePanResponderGrant,
    onPanResponderMove: this._handlePanResponderMove,
    onPanResponderRelease: this._handlePanResponderEnd,
    onPanResponderTerminate: this._handlePanResponderEnd
});
```

- PanResponder 객체를 컴포넌트 전개 연산자(...)로 결합하여 렌더

```
render() {
    return (
        <View style={styles.container}>
            <View
                ref={circle => {
                    this.circle = circle;
                }}
                style={styles.circle}
                {...this._panResponder.panHandlers}>
            </View>
        </View>
    );
}
```

- 애니메이션을 다룰때는 컴포넌트의 setNativeProps를 직접 호출하여 변화를 줄 수 있음

```
_handlePanResponderMove = (event, gestureState) => {
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updatePosition();
};
    
_updatePosition = () => {
    this.circle && this.circle.setNativeProps(this._circleStyles);
};
```

### 리스트 컴포넌트

#### `<FlatList>`

- props로 data와 renderItem을 반드시 지정
    - data: 렌더링할 데이터 []
    - renderItem: 데이터를 바탕으로 렌더링할 컴포넌트를 리턴하는 함수

```
render() {
    return <FlatList data={this.state.data} 
                     renderItem={this._renderItem} />
}
```

- data 배열의 각 항목에는 반드시 key 속성 지정

```
this.state = {
    data: [
        {
            key: 'GATHERING PREY',
            rank: 1,
            title: 'GATHERING PREY',
            author: 'John Sandford',
            book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg'
        },
        {
            key: 'MEMORY MAN',
            rank: 2,
            title: 'MEMORY MAN',
            author: 'David Baldacci',
            book_image: 'http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg'
        },
    ]
};
```

- renderItem의 인자로 넘어오는 객체의 item 속성으로 데이터에 접근 가능

```
_renderItem = ({ item }) => {
    return (
        <BookItem
            coverURL={item.book_image}
            title={item.key}
            author={item.author} />
    );
};
```

#### `<SectionList>`

- 데이터를 섹션으로 구분해서 보여줘야 하는 경우 사용
- props로 sections와 renderItem, renderSectionHeader를 반드시 지정
    - sections: 섹션을 구분하여 렌더링할 데이터 []
    - renderItem: 데이터를 바탕으로 렌더링할 컴포넌트를 리턴하는 함수
    - renderSectionHeader: 섹션 헤더를 렌더링할 컴포넌트를 리턴하는 함수
    
```
render() {
    return <SectionList sections={this.state.section} 
                        renderItem={this._renderItem} 
                        renderSectionHeader={this._renderHeader} />
}
```

- section 배열의 각 항목에는 반드시 title, data 속성 지정 
    - data 배열의 각 항목에는 반드시 key 속성 지정

```
this.state = {
    section: [
        {
            title: 'GATHERING PREY5',
            data: this._addKeysToBooks(mockBooks)
        },
        {
            title: 'MEMORY MAN6',
            data: this._addKeysToBooks(mockBooks2)
        }
    ]
};
```

- renderSectionHeader의 인자로 넘어오는 객체의 section 속성으로 title에 접근 가능
```
 _renderHeader = ({ section }) => {
    return (
        <Text style={styles.headingText}>
            {section.title}
        </Text>
    );
};
```

## [스타일](https://github.com/yanghyeryung/book-study/tree/master/react-native/05/style)
- 리액트 네이티브는 자바스크립트 기반 스타일 객체를 사용

### 인라인 스타일
 - render 함수 호출시마다 스타일 객체가 생성되어 비효율적 
```
<Text style={{fontStyle: 'italic'}}>italic</Text>
<Text style={{fontStyle: 'bold'}}>bold</Text>
```
 
### 오브젝트 스타일
- 스타일 객체를 따로 분리

```
const italic = {
    fontStyle: 'italic'
};
const bold = {
    fontStyle: 'bold'
 };
```
 
```
<Text style={italic}>italic</Text>
<Text style={bold}>bold</Text>
```
 
### StyleSheet.create
- 반복적인 객체 할당을 줄여주는 이점이 있음
- 한번 생성된 스타일은 변경 불가
```
const styles = StyleSheet.create({
    italic: {
        fontStyle: 'italic'
    },
    bold: {
        fontStyle: 'bold'
    }
});
```

```
<Text style={styles.italic}>italic</Text>
<Text style={styles.bold}>bold</Text>
```
 
### 스타일 병합
- 스타일 객체로 구성된 배열로 지정 
    - 배열에서 오른쪽에 있는 객체의 속성이 우선순위가 더 높음
    - 부정값(false, null, undefined)이 있을 시 해당 속성은 무시
    
```
<Text style={[styles.italic, styles.bold]}>italic, bold</Text>
<Text style={[styles.italic, this.state.white && {color: '#FFF'}]}>italic</Text>
```


### 레이아웃
- 리액트 네이티브의 위치 지정 방법은 flexbox, 절대 위치 지정 방식이 있음.
    
#### [Flexbox](https://facebook.github.io/react-native/docs/flexbox)
#### 절대적 위치 지정
- position: absolute 로 지정
- 스마트폰의 상태바 바로 아래에 위치할 컨테이너 뷰를 만들고 싶을때 사용

## [플랫폼API](https://github.com/yanghyeryung/book-study/tree/master/react-native/06/smartWeather)
### 지리적 위치 정보 이용
- 플랫폼에 상관없이 geolocation 기능을 기본적으로 제공

#### 사용자 위치 얻어오기
```
navigator.geolocation.getCurrentPosition(
    initialPosition => {
        this.props.onGetCoords(
            initialPosition.coords.latitude,
            initialPosition.coords.longitude
        );
    },
    error => {
        alert(error.message);
    },
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
);
```

#### 권한 다루기
- 모바일 플랫폼은 사용자가 위치 정보 접근시 허용되거나 거절당할 수 있기 때문에 모든 경우를 고려하여 코드 작성
- 앱 설정 파일에 위치 정보에 접근할 필요가 있다는 것을 명시해야 위치 정보 접근을 요청 할 수 있음.
    - iOS의 경우 Info.plist 파일에 NSLocationWhenInUsageDescription 항목을 추가 
    - 안드로이드의 경우 AndroidManifest.xml 파일에 다음 코드를 추가
        - `<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />"`
- 위와 같이 처리하면 위치 정보 요청 팝업이 뜨고, 허용여부 선택시 콜백 호출
    - 보통 허용하지 않으면 다시 위치 정보 요청 팝업이 뜨도록 처리 

#### 위치 관련 테스트
- iOS : Debug -> Location -> Custom Location 메뉴를 선택하여 다른 좌표 입력 가능
- 안드로이드 : Extended controls 팝업 -> Location 에서 다른 좌표 입력 가능 

#### 사용자 위치 지켜보기
- 사용자 위치가 변했을 때 변경된 정보를 받을 수 있음.
- 지속적으로 사용자 위치를 추적하거나 최신 위치 정보를 유지시 사용 
```
 this.watchID = navigator.geolocation.watchPosition((position) => {
    this.setState({position: position});
 });
 
 navigator.geolocation.clearWatch(this.watchID);
```

### 사진/카메라 접근하기 
- 네이티브 코드 작성이 필요 (react-native-init으로 생성)

#### 카메라 모듈 다루기
- CameraRoll 인터페이스 제공
- getPhotos를 호출하여 사진에 대한 정보를 가져올 수 있음.
```
import { CameraRoll } from 'react-native';
```

```
CameraRoll.getPhotos({ first: 1 }).then(data => {
    this.setState({
        photoSource: { uri: data.edges[0].node.image.uri }
    });
}, error => {
    console.warn(error);
});
```

#### getPhotoParams를 이용한 사진 요청
- first (Number)
가져오려는 사진 개수, 사진 앱의 역순으로 가져온다.
- after (String)
이전에 getPhotos호출시 콜백의 파라미터로 전달 받은 객체의 page_info.end_cursor를 넣으면 그 이후의 사진을 가져온다.
- groupTypes (String)
결과에 포함시킬 그룹의 종류에 해당하며 Album, All, Event 등을 지정할 수 있다.
- groupName (String)
결과에 포함시킬 특정 그룹의 이름에 해당하며 Recent Photos나 앨범 이름으로 지정할 수 있다.
- assetType (String)
에셋 종류에 해당하며 All, Photos, Video로 지정할 수 있다.
- mimeTypes (String[])
mimetype을 지정하여 해당하는 사진만 가져올 수 있다.

#### 카메라롤 이미지 렌더링
```
CameraRoll.getPhotos({ first: 1 }).then(data => {
    this.setState({
        photoSource: { uri: data.edges[0].node.image.uri }
    });
}, error => {
    console.warn(error);
});
```

```
<Image source={this.state.photoSource} />
```

#### 사진을 서버에 올리기
- 리액트 네이티브에서 XHR 모듈에 이미지 올리기 기능이 내장

```
let xmr = new XMLHttpRequest();
xhr.open('POST', 'http://posttestsetver.com/post.php');
let formdata = new FormData();
formdata.append('image', {...this.state.photo, name: 'image.jpg'});
xhr.send(formdata);
```

### AsyncStore를 이용한 영속적 데이터 저장
- AsyncStore 데이터를 저장, 접근 가능하다.
- 키는 @앱이름:키 형태로 하는 것이 일반적이다.

```
const STORAGE_KEY = '@SmarterWeather:zip';

AsyncStore.setItem(STORAGE_KEY, zip)
          .then(() => {})
          .catch(() => {})
          .done();
          
AsyncStore.getItem(STORAGE_KEY);
```

## [플랫폼 특정 컴포넌트](https://github.com/yanghyeryung/book-study/tree/master/react-native/08/first-project)

### iOS 혹은 안드로이드만을 위한 컴포넌트
- 특정 플랫폼에서만 동작하는 컴포넌트
    - 특정 플랫폼에 맞는 접미사를 붙임.
    - IOS : `<TabBarIOS>`
    - Android : `<SwitchAndroid>`
- 특정 플랫폼에서만 사용가능한 컴포넌트 props
    - IOS : [view#accessibilityviewismodal](https://facebook.github.io/react-native/docs/view#accessibilityviewismodal)
    - Android : [view#accessibilityliveregion](https://facebook.github.io/react-native/docs/view#accessibilityliveregion)

### 플랫폼별로 구현되어 있는 컴포넌트
#### 파일 확장자로 플랫폼 선택하기
- `Newsflash.android.js` / `Newsflash.ios.js`와 같이 중간 확장자로 파일 구분
- import 시 리액트 네이티브가 각 플랫폼에 맞는 확장자를 선택하여 불러온다.

```
import Newsflash from './Newsflash';
```

#### Platform 모듈 사용하기
- Platform 모듈을 사용하여 운영체제, 운영체제 버전을 확인 가능
- Platform API는 플랫폼에 따라 컴포넌트 코드는 완전히 분리하지 않고 작성시 유용하게 사용됨.

```
import { Platform } from 'react-native';

console.log(Platform.OS + ':' + Platform.Version);
```

```
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    color: (Platform.OS === 'ios') ? '#FF6666' : '#DD4444'
});
```

### 언제 플랫폼 특정 컴포넌트를 사용?
- 해당 플랫폼의 인터렉션 패턴을 따르고 싶은 경우 사용 
    - IOS : [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes)
    - Android : [Android Design Reference](https://developer.android.com/design/index.html)