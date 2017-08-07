import Ember from 'ember';

export default Ember.Component.extend({
	isShowingModal: false,
	isCollapseIn:false,
	actions: {
		openModal: function() {
			this.set('isShowingModal',true);
			Ember.$("#data-scroll-menu").toggleClass('in');
		},
		closeModal:function(){
			this.set('isShowingModal',false);
		}
	}
});
