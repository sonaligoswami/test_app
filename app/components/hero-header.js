import Ember from 'ember';

export default Ember.Component.extend({
	isShowingModal: false,
	actions: {
		openModal: function() {
			this.set('isShowingModal',true);
		},
		closeModal:function(){
			this.set('isShowingModal',false);
		}
	}
});
