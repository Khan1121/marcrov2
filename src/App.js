import React, { Component } from 'react';
import Eos from 'eosjs';

class App extends Component {
  

  state = {
    name: '',
    key :'',
    name2: '',
    key2: '',
    name3: '',
    key3 :'',
    name4: '',
    key4: '',
    name5: '',
    key5 :'',
    name6: '',
    key6: '',
    name7: '',
    key7 :'',
    name8: '',
    key8 :'',
    name9: '',
    key9: '',
    name10: '',
    key10 :'',
    transferfrom :'',
    transKey :'',
    transTo :'',
    EosValue : '',
    AllsignKey : ''
  }
  nameChange = (e) => {
    this.setState({
      name: e.target.value
    })
  } 
  keyChange = (e) => {
    this.setState({
      key: e.target.value
    })
  }
  name2Change = (e) => {
    this.setState({
      name2: e.target.value
    })
  } 

  key2Change = (e) => {
    this.setState({
      key2: e.target.value
    })
  }
  name3Change = (e) => {
    this.setState({
      name3: e.target.value
    })
  } 
  key3Change = (e) => {
    this.setState({
      key3: e.target.value
    })
  }
  name4Change = (e) => {
    this.setState({
      name4: e.target.value
    })
  } 
  key4Change = (e) => {
    this.setState({
      key4: e.target.value
    })
  }
  name5Change = (e) => {
    this.setState({
      name5: e.target.value
    })
  } 
  key5Change = (e) => {
    this.setState({
      key5: e.target.value
    })
  }
  name6Change = (e) => {
    this.setState({
      name6: e.target.value
    })
  } 

  key6Change = (e) => {
    this.setState({
      key6: e.target.value
    })
  }
  name7Change = (e) => {
    this.setState({
      name7: e.target.value
    })
  } 
  key7Change = (e) => {
    this.setState({
      key7: e.target.value
    })
  }
  name8Change = (e) => {
    this.setState({
      name8: e.target.value
    })
  } 
  key8Change = (e) => {
    this.setState({
      key8: e.target.value
    })
  }
  name9Change = (e) => {
    this.setState({
      name9: e.target.value
    })
  } 
  key9Change = (e) => {
    this.setState({
      key9: e.target.value
    })
  }
  name10Change = (e) => {
    this.setState({
      name10: e.target.value
    })
  } 
  key10Change = (e) => {
    this.setState({
      key10: e.target.value
    })
  }
  transChange =(e) =>{
    this.setState({
      transferfrom : e.target.value
    })
  }
  transKeyChange =(e) =>{
    this.setState({
      transKey : e.target.value
    })
  }
  transToChange =(e) =>{
    this.setState({
      transTo : e.target.value
    })
  }
  EosChange =(e) =>{
    this.setState({
      EosValue : e.target.value
    })
  }
  AllsignChange =(e) =>{
    this.setState({
      AllsignKey : e.target.value
    })
  }
//////////////////////////////////////////////////////////
btFunctionTrans=()=>{
  
  let config ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 
  keyProvider: this.state.transKey,
  httpEndpoint: 'https://proxy.eosnode.tools:443',
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true};

  var fromaccount = this.state.transferfrom;
  var array = this.state.transTo.split("  ");
  var balance = this.state.EosValue;
  const eos = Eos(config);
  var count = 0;
   var timer = setInterval(function(){
    
    if(count === array.length){
      clearInterval(timer);
      console.log('transfer complete');
    }
    else{
      eos.transaction(
        {
          actions: [
            {
              account: 'eosio.token',
              name: 'transfer',
              authorization: [{
                actor: fromaccount,
                permission: 'owner'
              }],
              data: {
                from: fromaccount,
                to: array[count],
                quantity: balance,
                memo: ''
              }
            }
          ]
        }
      ).then(result=>{
        console.log(result);
      })   
      count++;
    }

   }, 2000);

  
};

//////////////////////////////////////////////////////////

btFSameSignup=()=>{
  
  let config ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 
  keyProvider: this.state.AllsignKey,
  httpEndpoint: 'https://proxy.eosnode.tools:443',
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true};
  const eos = Eos(config);
  var array = this.state.transTo.split("  ");
  var count = 0;
   var timer = setInterval(function(){
    if(count === array.length){
      clearInterval(timer);
      console.log('transfer complete');
    }
    else
    {
      const request = require('superagent');
      const url='https://dcugl.com:5000/seed';
      request.post(url)
        .set('Content-Type', 'application/json')
        .send()
        .then(result=>{
          let memo = 'refpresignup:itamnetwork1:'+result.body.num+':'+result.body.seed;
          eos.transaction(
            {
              actions: [
                {
                  account: 'eosio.token',
                  name: 'transfer',
                  authorization: [{
                    actor: array[count],
                    permission: 'owner'
                  }],
                  data: {
                    from: array[count],
                    to: 'untowermain1',
                    quantity: '1.0000 EOS',
                    memo: memo
                  }
                }
              ]
            }
          ).then(result=>{
            console.log(result);
          })
        })
      count++;
    }
   }, 1000);

  
};

//////////////////////////////////////////////////////////
btFGachaAll=()=>{
  
  let config ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 
  keyProvider: this.state.AllsignKey,
  httpEndpoint: 'https://proxy.eosnode.tools:443',
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true};

  var array = this.state.transTo.split("  ");
  const eos = Eos(config);
  var count = 0;
   var timer = setInterval(function(){
    if(count === array.length)
    {
      clearInterval(timer);
      console.log('transfer complete');
    }
    else
    {
      const request = require('superagent');
      const url='https://dcugl.com:5000/seed';
      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos.transaction(
          {
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: array[count],
                  permission: 'owner'
                }],
                data: {
                  from: array[count],
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })
      })
      count++;
    }
   }, 2000);
};


///////////////////////////////////////////////////////////
  btFunctionAll=()=>{
    let config ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config2 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key2,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};

    let config3 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key3,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config4 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key4,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};

    let config5 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key5,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config6 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key6,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};

    let config7 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key7,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config8 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key8,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};

    let config9 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key9,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config10 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key10,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};

     const eos = Eos(config);
     const eos2 = Eos(config2);
     const eos3 = Eos(config3);
     const eos4 = Eos(config4);
     const eos5 = Eos(config5);
     const eos6 = Eos(config6);
     const eos7 = Eos(config7);
     const eos8 = Eos(config8);
     const eos9 = Eos(config9);
     const eos10 = Eos(config10);

     const request = require('superagent');
     const url='https://dcugl.com:5000/seed';
     
     request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        // config -- example: {broadcast: false, sign: true}
      })

      request.post(url)
        .set('Content-Type', 'application/json')
        .send()
        .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos2.transaction(
            {
              
              // ...headers,
              // context_free_actions: [],
              actions: [
                {
                  account: 'eosio.token',
                  name: 'transfer',
                  authorization: [{
                    actor: this.state.name2,
                    permission: 'owner'
                  }],
                  data: {
                    from: this.state.name2,
                    to: 'untowermain1',
                    quantity: '1.0000 EOS',
                    memo: memo
                  }
                }
              ]
            }
          ).then(result=>{
            console.log(result);
          })        
        })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos3.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name3,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name3,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos4.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name4,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name4,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos5.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name5,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name5,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })
      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos6.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name6,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name6,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })
      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos7.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name7,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name7,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })
      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos8.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name8,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name8,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })
      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos9.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name9,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name9,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })
      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos10.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name10,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name10,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })
      
  };

  
  btFunction12=()=>{

    let config ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config2 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key2,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};
    
     const eos = Eos(config);
     const eos2 = Eos(config2);

     const request = require('superagent');
     const url='https://dcugl.com:5000/seed';
     

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos2.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name2,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name2,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })
      })
  };
  btFunction34=()=>{

    let config3 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key3,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config4 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key4,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};
    
     const eos3 = Eos(config3);
     const eos4 = Eos(config4);

     const request = require('superagent');
     const url='https://dcugl.com:5000/seed';
     

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos3.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name3,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name3,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos4.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name4,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name4,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })
      })
  };


  btFunction56=()=>{

    let config5 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key5,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config6 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key6,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};
    
     const eos5 = Eos(config5);
     const eos6 = Eos(config6);

     const request = require('superagent');
     const url='https://dcugl.com:5000/seed';
     

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos5.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name5,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name5,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos6.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name6,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name6,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })
      })
  };
  btFunction78=()=>{

    let config7 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key7,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config8 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key8,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};
    
     const eos7 = Eos(config7);
     const eos8 = Eos(config8);

     const request = require('superagent');
     const url='https://dcugl.com:5000/seed';
     

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos7.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name7,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name7,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos8.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name8,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name8,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })
      })
  };
  
  btFunction910=()=>{

    let config9 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key9,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config10 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key10,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};
    
     const eos9 = Eos(config9);
     const eos10 = Eos(config10);

     const request = require('superagent');
     const url='https://dcugl.com:5000/seed';
     

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos9.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name9,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name9,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'gacha:'+result.body.num+':'+result.body.seed;
        eos10.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name10,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name10,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })
      })
  };

  btFunctionSign=()=>{
    let config ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config2 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key2,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};

    let config3 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key3,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config4 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key4,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};

    let config5 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key5,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config6 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key6,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};

    let config7 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key7,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config8 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key8,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};

    let config9 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key9,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};


    let config10 ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    keyProvider: this.state.key10,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};

     const eos = Eos(config);
     const eos2 = Eos(config2);
     const eos3 = Eos(config3);
     const eos4 = Eos(config4);
     const eos5 = Eos(config5);
     const eos6 = Eos(config6);
     const eos7 = Eos(config7);
     const eos8 = Eos(config8);
     const eos9 = Eos(config9);
     const eos10 = Eos(config10);

     const request = require('superagent');
     const url='https://dcugl.com:5000/seed';
     
     
     request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'refpresignup:itamnetwork1:'+result.body.num+':'+result.body.seed;
        eos.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        // config -- example: {broadcast: false, sign: true}
      })

      
      
      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'presignup:'+result.body.num+':'+result.body.seed;
        eos2.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name2,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name2,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'presignup:'+result.body.num+':'+result.body.seed;
        eos3.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name3,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name3,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'presignup:'+result.body.num+':'+result.body.seed;
        eos4.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name4,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name4,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'presignup:'+result.body.num+':'+result.body.seed;
        eos5.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name5,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name5,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'presignup:'+result.body.num+':'+result.body.seed;
        eos6.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name6,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name6,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'presignup:'+result.body.num+':'+result.body.seed;
        eos7.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name7,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name7,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'presignup:'+result.body.num+':'+result.body.seed;
        eos8.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name8,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name8,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'presignup:'+result.body.num+':'+result.body.seed;
        eos9.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name9,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name9,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })
      
      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let memo = 'presignup:'+result.body.num+':'+result.body.seed;
        eos10.transaction(
          {
            
            // ...headers,
            // context_free_actions: [],
            actions: [
              {
                account: 'eosio.token',
                name: 'transfer',
                authorization: [{
                  actor: this.state.name10,
                  permission: 'owner'
                }],
                data: {
                  from: this.state.name10,
                  to: 'untowermain1',
                  quantity: '1.0000 EOS',
                  memo: memo
                }
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })        
      })
      
  };
  

  btFunctionGettable=()=>{
  
    let config ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 

    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};
    var array = this.state.transTo.split("  ");
    const eos = Eos(config);
    var count = 0;
    for (count=0;count<array.length;count++){
      var result= eos.getTableRows(
        {json:true,
          scope:array[count],
          code:'untowermain1',
          table:'premonster',
          limit:100
        }
      )
      console.log(array[count]);
      console.log(result);
      
      
    }
  };    
  btFunctiondailycheck=()=>{
  
    let config ={ chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906', 
    keyProvider: this.state.AllsignKey,
    httpEndpoint: 'https://proxy.eosnode.tools:443',
    expireInSeconds: 60,
    broadcast: true,
    verbose: false, // API activity
    sign: true};
    const eos = Eos(config);
    var array = this.state.transTo.split("  ");
    var count = 0;

    var timer = setInterval(function(){
      
       
      if(count === array.length){
        clearInterval(timer);
        console.log('transfer complete');
      }
      else{
        const request = require('superagent');
     const url='https://dcugl.com:5000/seed';
     

      request.post(url)
      .set('Content-Type', 'application/json')
      .send()
      .then(result=>{
        let seed = result.body.num+':'+result.body.seed;
        eos.transaction(
          {
            actions: 
            [
              {
                account: 'devtoothowe1',
                name: 'dailycheck',
                authorization: 
                [
                  {
                  actor: array[count],
                  permission: 'owner'
                  }
                ],
                data :
                 {
                   _user:array[count],
                   _seed:seed
                 }
              
              }
            ]
          }
        ).then(result=>{
          console.log(result);
        })
      })         
        count++;
      }
      
     }, 2000);

    
  };    
  

  render() {
    return (
      <div className="App">
      <form>
        <input
          placeholder="계정"
          value={this.state.name}
          onChange={this.nameChange}
          />
          <div>
          {this.state.name}
          </div>
      </form>

      <form>
        <input
          placeholder="owner key"
          value={this.state.key}
          onChange={this.keyChange}
          />
          <div>
          {this.state.key}
          </div>
      </form>
      <form>
        <input
          placeholder="계정2"
          value={this.state.name2}
          onChange={this.name2Change}
          />
          <div>
          {this.state.name2}
          </div>
      </form>

      <form>
        <input
          placeholder="owner key2"
          value={this.state.key2}
          onChange={this.key2Change}
          />
          <div>
          {this.state.key2}
          </div>
      </form>
      <button onClick={this.btFunction12}>1~2~~~~~~GACHA~~~~~~~</button>
      <form>
        <input
          placeholder="계정3"
          value={this.state.name3}
          onChange={this.name3Change}
          />
          <div>
          {this.state.name3}
          </div>
      </form>

      <form>
        <input
          placeholder="owner key3"
          value={this.state.key3}
          onChange={this.key3Change}
          />
          <div>
          {this.state.key3}
          </div>
      </form>
      <form>
        <input
          placeholder="계정4"
          value={this.state.name4}
          onChange={this.name4Change}
          />
          <div>
          {this.state.name4}
          </div>
      </form>

      <form>
        <input
          placeholder="owner key4"
          value={this.state.key4}
          onChange={this.key4Change}
          />
          <div>
          {this.state.key4}
          </div>
      </form>
      <button onClick={this.btFunction34}>3~4~~~~~~GACHA~~~~~~~</button>
      <form>
        <input
          placeholder="계정5"
          value={this.state.name5}
          onChange={this.name5Change}
          />
          <div>
          {this.state.name5}
          </div>
      </form>

      <form>
        <input
          placeholder="owner key5"
          value={this.state.key5}
          onChange={this.key5Change}
          />
          <div>
          {this.state.key5}
          </div>
      </form>
      <form>
        <input
          placeholder="계정6"
          value={this.state.name6}
          onChange={this.name6Change}
          />
          <div>
          {this.state.name6}
          </div>
      </form>

      <form>
        <input
          placeholder="owner key6"
          value={this.state.key6}
          onChange={this.key6Change}
          />
          <div>
          {this.state.key6}
          </div>
      </form>
      <button onClick={this.btFunction56}>5~6~~~~~~GACHA~~~~~~~</button>
      <form>
        <input
          placeholder="계정7"
          value={this.state.name7}
          onChange={this.name7Change}
          />
          <div>
          {this.state.name7}
          </div>
      </form>

      <form>
        <input
          placeholder="owner key7"
          value={this.state.key7}
          onChange={this.key7Change}
          />
          <div>
          {this.state.key7}
          </div>
      </form>
      <form>
        <input
          placeholder="계정8"
          value={this.state.name8}
          onChange={this.name8Change}
          />
          <div>
          {this.state.name8}
          </div>
      </form>

      <form>
        <input
          placeholder="owner key8"
          value={this.state.key8}
          onChange={this.key8Change}
          />
          <div>
          {this.state.key8}
          </div>
      </form>
      <button onClick={this.btFunction78}>7~8~~~~~~GACHA~~~~~~~</button>
      <form>
        <input
          placeholder="계정9"
          value={this.state.name9}
          onChange={this.name9Change}
          />
          <div>
          {this.state.name9}
          </div>
      </form>

      <form>
        <input
          placeholder="owner key9"
          value={this.state.key9}
          onChange={this.key9Change}
          />
          <div>
          {this.state.key9}
          </div>
      </form>
      <form>
        <input
          placeholder="계정10"
          value={this.state.name10}
          onChange={this.name10Change}
          />
          <div>
          {this.state.name10}
          </div>
      </form>

      <form>
        <input
          placeholder="owner key10"
          value={this.state.key10}
          onChange={this.key10Change}
          />
          <div>
          {this.state.key10}
          </div>
      </form>
      <button onClick={this.btFunction910}>9~10~~~~~~GACHA~~~~~~~</button>
      <div>
        all button
      </div>
      <button onClick={this.btFunctionSign}>All.Signup</button>
      <button onClick={this.btFunctionAll}>All~~~~~~GACHA~~~~~~~</button>
      <div>
      <button onClick={this.btFunctionTrans}>All~~~~~~Transfer Eos</button>
      </div>
      <form>
        <input
          placeholder="보내는 계정"
          value={this.state.transferfrom}
          onChange={this.transChange}
          />
          <div>
          {this.state.transferfrom}
          </div>
      </form>
      <form>
        <input
          placeholder="보내는 계정 key"
          value={this.state.transKey}
          onChange={this.transKeyChange}
          />
          <div>
          {this.state.transKey}
          </div>
      </form>
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
          placeholder="(ex) 3.0000 EOS "
          value={this.state.EosValue}
          onChange={this.EosChange}
          />
          <div>
          {this.EosValue}
          </div>
      </form>
      <form>
        <input
          placeholder="All signup owner key"
          value={this.state.AllsignKey}
          onChange={this.AllsignChange}
          />
      </form>
      <button onClick={this.btFSameSignup}>All.Signup</button>
      <button onClick={this.btFGachaAll}>Samekeygacha</button>
      <button onClick={this.btFunctionGettable}>gettable</button>
      <button onClick={this.btFunctiondailycheck}>dailycheck</button>
      </div>
    );
  }
}

export default App;
