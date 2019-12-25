import React, {Component} from 'react';
import Table from './components/Table/Table';
import Loader from './components/Loader/Loader'
import ReactPaginate from 'react-paginate';
import _ from 'lodash'




class App extends Component {


    //перменные для динамеческого изменения
    state ={
        isLoad:true,
        data:[],
        current_page:0
    }



    //для асинхронного запроса 
    async componentDidMount(){
        const params = ['GET', 'POST' ,'PUT','DELETE']
       const response = await fetch('https://intent-classification-app.herokuapp.com/api/requests/?format=json', {mode:'no-cors'})
       //const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=23c8ac4e2c71a50cc524672c8dfcd08a&language=ru&page=5')
      //const response = await fetch('http://www.filltext.com/?callback=&rows=200&fname={firstName}&lname={lastName}') 

console.log(response)

      const data = await response.json()
      //const data = JSON.parse(response)
      console.log(data)
      
        this.setState({
            isLoad:false,
            data:data
        })

    }

    handlePageClick = ({selected}) =>{
        this.setState({current_page:selected})
    }


    render() {
        const per = 25 //кол-во записей на одной странице       
        const displayed_date = _.chunk(this.state.data, per)[this.state.current_page] //записи отображаемые на текущей странице


        return(
            <div className="container">
                    {
                       this.state.isLoad ? <Loader/>  : <Table data={displayed_date}/>                                                                            
                    }

                    {
                        this.state.data.length >= per ?
                        <ReactPaginate
                            previousLabel={'Назад'}
                            nextLabel={'Вперед'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={Math.ceil(this.state.data.length / per)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}                            
                            activeClassName={'active'}
                            forcePage={this.state.current_page}
                            pageClassName="page-item"
                            pageLinkClassName="page-link"         
                            previousClassName="page-item"
                            nextClassName="page-item"
                            previousLinkClassName="page-link"
                            nextLinkClassName="page-link"
                        /> : null
                    }

            </div>
        )
    }
}

export default App;