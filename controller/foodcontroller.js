const Price = require('../model/Price');

const findPrice = async (req, res) => {
    try {
        const {zone, organization_id , total_distance, item_type} = req.body;
        
        const data = await Price.findOne({
            zone, organization_id    });
        console.log(data)
        let total_price = data.base_distance_in_km * data.fix_price;
        if (total_distance > data.base_distance_in_km) {
            const add_distance = total_distance - data.base_distance_in_km;
            if(item_type === 'perishable') {
                total_price += add_distance * data.km_price;
            }else{
                total_price +=  add_distance * 1;
            }
          
          console.log(total_price)
        }
    
        res.status(200).json({total_price});
    } catch (err) {
        console.log(err);
        res.status(404).json({err:"Internal server error"})
    }
};

module.exports = findPrice;