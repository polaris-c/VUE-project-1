;(function() {
	'use strict';
    console.log('Hello!');

    function copy(obj) {
    	return Object.assign({}, obj);
    }

    new Vue({
		el: '#main',
		data: {
			list: [],
			current: {
				id: '',
				title: '',
				completedFlag: false,
				desc: '',
				remindAt: '',
			},
		},
		methods: {
			merge: function() {
				var isUpdate, id;
				var isUpdate = id = this.current.id;
				console.log('current.id:', this.current.id);

				if(isUpdate) {
					var index = this.list.findIndex(function(item) {
						return item.id == isUpdate;
					});
					Vue.set(this.list, index, copy(this.current));

					// this.list[index] = Object.assign({}, this.current)
					console.log('1-list: ', this.list);
					this.reset();
				}
				else {
					var current = this.current;
					if(!current.title && current.title !== 0) return;

					console.log('2-current: ', this.current);

					var todo = Object.assign({}, this.current);
					todo.id = this.nextID();
					this.list.push(todo);
					this.reset();
				}
			},

			update: function(item) {
				this.current = copy(item);
				// this.current = item;
				// console.log('update: ', this.current);
			},

			remove: function(id) {
				this.list.splice(id, 1);
			},

			nextID: function() {
				return this.list.length + 1;
			},

			reset: function() {
				this.update({});
			}

		},
    });

}) ();



