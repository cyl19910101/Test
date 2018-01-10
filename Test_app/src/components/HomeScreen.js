import React from 'react';
import { StyleSheet,
         Text,
         View,
         ActivityIndicator
         } from 'react-native';
import { bindActionCreators } from 'redux';
import reducer from '../reducers/fetch_data';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    this.props.getData()
  }

    render() {
    const { result, isFetching } = this.props;

    if (isFetching) {
        return(
          <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size={'large'} />
                </View>
        )
    } else {
      return(
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                   <Text>{result.length}</Text>
               </View>
      )
    }
  }
}


function mapStateToProps(state) {
  return {
    result: state.result.result_array
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  welcome: {
    color: '#FFF',
    fontSize: 30
  }
})
