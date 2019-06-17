import React, { Component } from 'react';
import Eos from 'eosjs';


var url = 'https://dcugl.com/seed';
var async = require('async');
var request = require('superagent');

class App extends Component {
  state = {
    transferfrom: '',
    transKey: '',
    transTo: '',
    EosValue: '',
    AllsignKey: ''
  }
  transChange = (e) => {
    this.setState({
      transferfrom: e.target.value
    })
  }
  transKeyChange = (e) => {
    this.setState({
      transKey: e.target.value
    })
  }
  transToChange = (e) => {
    this.setState({
      transTo: e.target.value
    })
  }
  EosChange = (e) => {
    this.setState({
      EosValue: e.target.value
    })
  }
  AllsignChange = (e) => {
    this.setState({
      AllsignKey: e.target.value
    })
  }
  //////////////////////////////////////////////////////////
  btFunctionTrans = () => {

    let config = {
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      // WIF string or array of keys..
      keyProvider: this.state.AllsignKey,
      httpEndpoint: 'https://proxy.eosnode.tools:443',
      expireInSeconds: 60,
      broadcast: true,
      verbose: false, // API activity
      sign: true
    };

    var array = this.state.transTo.split("  ");
    const eos = Eos(config);
    var count = 0;
    var timer = setInterval(function () {
      eos.transaction(
        {
          actions: [
            {
              account: 'untowermain1',
              name: 'stagestart',
              authorization: [{
                actor: array[count],
                permission: 'owner'
              }],
              data: {
                _user: array[count],
                _party_number: 1,
                _floor: 1,
                _type: 2,
                _difficult: 5
              }
            }
          ]
        }
      ).then(result => {
        console.log(result);
      })

      /*
      eos.transaction(
        {
          actions: [
            {
              account: 'untowermain1',
              name: 'activeturn',
              authorization: [{
                actor: fromaccount,
                permission: 'owner'
              }],
              data: {
                _user: fromaccount,
                _turn: count,
                _seed: 1,
              }
            }
          ]
        }
      ) 
      */
      count++;
      if (count === array.length) {
        clearInterval(timer);
        console.log('transfer complete');
      }
    }, 2000);


  };

  //////////////////////////////////////////////////////////

  btFSameSignup = () => {

    let config = {
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      // WIF string or array of keys..
      keyProvider: this.state.AllsignKey,
      httpEndpoint: 'https://proxy.eosnode.tools:443',
      expireInSeconds: 60,
      broadcast: true,
      verbose: false, // API activity
      sign: true
    };

    var array = this.state.transTo.split("  ");
    const eos = Eos(config);
    var count = 0;
    var timer = setInterval(function () {
      eos.transaction(
        {
          actions: [
            {
              account: 'untowermain1',
              name: 'stageexit',
              authorization: [{
                actor: array[count],
                permission: 'owner'
              }],
              data: {
                _user: array[count]
              }
            }
          ]
        }
      ).then(result => {
        console.log(result);
      })
      /*
      eos.transaction(
        {
          actions: [
            {
              account: 'untowermain1',
              name: 'activeturn',
              authorization: [{
                actor: fromaccount,
                permission: 'owner'
              }],
              data: {
                _user: fromaccount,
                _turn: count,
                _seed: 1,
              }
            }
          ]
        }
      ) 
      */
      count++;
      if (count === array.length) {
        clearInterval(timer);
        console.log('transfer complete');
      }
    }, 2000);
  };

  //////////////////////////////////////////////////////////
  btFGachaAll = () => {

    let config = {
      chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
      // WIF string or array of keys..
      keyProvider: this.state.AllsignKey,
      httpEndpoint: 'https://proxy.eosnode.tools:443',
      expireInSeconds: 60,
      broadcast: true,
      verbose: false, // API activity
      sign: true
    };

    var array = this.state.transTo.split("  ");
    const eos = Eos(config);
    var count = 0;
    var timer = setInterval(function () {

      const request = require('superagent');
      const url = 'https://dcugl.com/seed';

      request.post(url)
        .set('Content-Type', 'application/json')
        .send()
        .then(result => {
          eos.transaction(
            {
              actions: [
                {
                  account: 'untowermain1',
                  name: 'dailycheck',
                  authorization: [{
                    actor: array[count],
                    permission: 'owner'
                  }],
                  data: {
                    _user: array[count],
                    _seed:result.body.num+':'+result.body.seed
                  }
                }
              ]
            }
          ).then(result => {
            console.log(result);
          })
        })
      count++;
      if (count === array.length) {
        clearInterval(timer);
        console.log('transfer complete');
      }
    }, 2000);


  };


  ///////////////////////////////////////////////////////////



  btFunctionGettable = () => {

    for (var i=0; i < 6; i++) {
      let config = {
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
        // WIF string or array of keys..
        keyProvider: this.state.AllsignKey,
        httpEndpoint: 'https://proxy.eosnode.tools:443',
        expireInSeconds: 60,
        broadcast: true,
        verbose: false, // API activity
        sign: true
      };

      var array = this.state.transTo.split("  ");
      const eos = Eos(config);
      var count = 0;
      var tcount = 1;
      request.post(url)
        .set('Content-Type', 'application/json')
        .send()
        .then(result => {
          let memo =result.body.num + ':' + result.body.seed;
          var timer = setInterval(function(){
            eos.transaction(
              {
                actions: [
                  {
                    account: 'untowermain1',
                    name: 'activeturn',
                    authorization: [{
                      actor: array[count],
                      permission: 'owner'
                    }],
                    data: {
                      _seed: memo,
                      _turn: tcount,
                      _user: array[count]
                    }
                  }
                ]
              }
            ).then(result => {
              console.log(result);
            })
            count++;
            if(count === array.length){
              clearInterval(timer);
              console.log('action complete');
            }
          },2000);
          
        })
        tcount++;
    }


  };


  render() {
    return (
      <div className="App">
        <div>
          all button
      </div>
        <div>
          <button onClick={this.btFunctionTrans}>All STAGE START</button>
        </div>
        <form>
          <input
            placeholder="받는계정 사이에 공백2개필요 "
            value={this.state.transTo}
            onChange={this.transToChange}
          />
          <div>
            {this.state.transTo}
          </div>
        </form>

        <form>
          <input
            placeholder="All signup owner key"
            value={this.state.AllsignKey}
            onChange={this.AllsignChange}
          />
        </form>
        <button onClick={this.btFSameSignup}>ALL STAGE EXIT</button>
        <button onClick={this.btFGachaAll}>DAILYCHECK</button>
        <button onClick={this.btFunctionGettable}>active gogo</button>

      </div>
    );
  }
}

export default App;