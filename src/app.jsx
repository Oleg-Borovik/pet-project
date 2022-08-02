import React from "react"
import styles from './style.less'
import {Text} from './common/component'
import {Provider} from "react-redux";
import {store} from "./redux/store";

const App = () => {
    return <Provider store={store}>
        <div className={styles.div}>
            СДЕЛАЙ СУКА ДЕЛО
            <Text/>
        </div>
    </Provider>
}
export default App;