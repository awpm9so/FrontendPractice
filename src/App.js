import React, {Component} from 'react';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader'





class App extends Component {

    state ={
        isLoad:true,
        data:[]
    }



    //для асинхронного запроса 
    async componentDidMount(){
       const response = await fetch('https://intent-classification-app.herokuapp.com/api/requests/?format=json', {mode:"no-cors"})
       //const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=23c8ac4e2c71a50cc524672c8dfcd08a&language=ru&page=5')
      //const response = await fetch('http://www.filltext.com/?callback=&rows=100&fname={firstName}&lname={lastName}') 
      const data = await response.json()
      //const data = JSON.parse(response)
      console.log(data)
      
        this.setState({
            isLoad:false,
            data:data
        })

    }

    render() {
        return(
            <div className="container">
                    {
                       this.state.isLoad ? <Loader/>  : <Table data={this.state.data}/>
                                                                            
                    }

            </div>
        )
    }
}

export default App;