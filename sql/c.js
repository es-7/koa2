const {query} = require('./async-db')

const getUser = async (phone,groupID) => {
    let sql = `SELECT concat(customerID,'') as customerID FROM tbl_crm_customer_info WHERE groupID=${groupID} and customerMobile=${phone}`
    return await query(sql)
}

const getUserByCard = async(cardno,groupID)=>{
    let sql = `SELECT concat(customerID,'') as customerID  FROM tbl_crm_card_info WHERE groupID=${groupID} and cardno=${cardno}`
    return await query(sql)
}

module.exports.recharge = async (phone,groupID) => {
    const user = await getUser(phone,groupID)
    if(!user.length){
        return '会员人不存在'
    }
    let customerID = user[0].customerID
    let sql = `update tbl_crm_card_info set moneyBalance=10000000000 WHERE groupID=${groupID} and customerID=${customerID}`
     await query(sql)
}


const deleteUser = async (customerID,groupID) => {
        const sql = `delete from tbl_crm_customer_channel where groupID=${groupID} and customerID=${customerID};
        delete from tbl_crm_card_info where groupID=${groupID} and customerID=${customerID};
        delete from tbl_crm_customer_info where groupID=${groupID} and customerID=${customerID};`
        await query(sql)
}

module.exports.deleteUser = async (phone,groupID,cid,cardno) => {
    if(cardno){
        const  customerIDs = await getUserByCard(cardno,groupID)
        console.log(customerIDs)
        if(!customerIDs.length){
            return '卡信息查询失败'
        }
        cid = customerIDs[0].customerID || cid
    }
    if(cid){
        return await deleteUser(cid,groupID)
    }
    const user = await getUser(phone,groupID)
    if(!user.length){
        return '会员人不存在'
    }
    return  await deleteUser(user[0].customerID,groupID)
}


