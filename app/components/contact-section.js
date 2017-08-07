import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations,{
	isShowContacForm:true,
	isShowThankMsg:false,
	viewErrors:false,
	validations: {
		name:{
			presence: { message: 'Name can not be empty' }
		},
		email:{
			presence: { message: 'Email can not be empty' },
			format: { with: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, allowBlank: true, message: 'Email is not valid'  }
		},
		subject:{
			presence: { message: 'Subject can not be empty' }
		},
		description:{
			presence: { message: 'Message can not be empty' }
		}
	},
	actions:{
		submit:function(){
			this.validate().then(()=>{
				this.set('isShowThankMsg', true);
				this.set('isShowContacForm', false);
			}).catch(()=>{
				this.set('viewErrors', true);
			})
		}
		
	}
});
