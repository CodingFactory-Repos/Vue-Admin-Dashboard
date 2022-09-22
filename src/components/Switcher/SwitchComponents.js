export default {
    name: 'SwitchComponents',

    data() {
        return {

            numIndex:0,
            index:[
                {
                    id: 1,
                    isSelected:true,
                },
                {
                    id: 2,
                    isSelected:true,
            },
                {
                    id: 3,
                    isSelected:true,
            },
                {
                    id: 4,
                    isSelected:true,
            }]
        };
    },
    methods: {
        setValueInClick(item, index) {
            this.elmnIndex =index[item.id-1];
            item.isSelected = false;
            item=this.elmnIndex
            item.isSelected = true;
            this.numIndex=item.id;
            console.log(this.numIndex);
        }

}
}
