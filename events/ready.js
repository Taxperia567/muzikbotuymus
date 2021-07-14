const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gerekli kurulum tamamlandı! `);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${client.user.tag} Olarak Giriş Yapıldı!`);
  client.user.setStatus(client.ayarlar.durum);
  client.user.setActivity(client.ayarlar.oynuyor);
}