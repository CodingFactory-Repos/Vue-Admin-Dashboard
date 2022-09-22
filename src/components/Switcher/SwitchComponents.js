export default {
    name: 'SwitchComponents',

    data() {
        return {
            lastIndex:0,
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
        setValueInClick(item){
            return item.isSelected = false;
        }

}
}
