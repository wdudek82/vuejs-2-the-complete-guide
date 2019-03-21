export const fruitMixin = {
  data() {
    return {
      text: 'Hello there!',
      secondText: 'Hello from second text!',
      filterText: '',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((fruit) => {
        return fruit.toLowerCase().match(this.filterText.toLowerCase());
      });
    },
  },
};
