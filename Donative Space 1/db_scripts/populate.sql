-- None at the moment,users must be created using the API because of the bcrypt
insert into categoria(categoria_name, created_at, updated_at) values
   ('Roupa','now()','now()'),
   ('Brinquedo','now()','now()'),
   ('Calçados','now()','now()'),
   ('Alimento','now()','now()'),
   ('Material Escolar','now()','now()');

insert into subcategoria(item, descricao, categoria_id, created_at, updated_at)
values('Blusa','Em perfeitas condições','1','now()','now()'),
('Chinelos','Em perfeitas condições','3','now()','now()'),
('Arroz','Um saco de 5KG','4','now()','now()'),
('Bola','Em perfeitas condições','2','now()','now()'),
('Atlas Geografico','Em perfeitas condições','5','now()','now()'),
('Botas','Em perfeitas condições','3','now()','now()'),
('Camisa','Em perfeitas condições','1','now()','now()'),
('Massa','Uma caixa de 24 pacotes','4','now()','now()'),
('Boneca','Em perfeitas condições','2','now()','now()'),
('Dicionario Russo','Em perfeitas condições','5','now()','now()');

insert into doador(usr_id, created_at, updated_at)values('1','now()','now()'),
('2','now()','now()');



insert into organizacao(org_name, usr_id, org_endereco, geom, org_telefone, created_at, updated_at, org_img)
values('Cruz Vermelha Portuguesa','2','Jardim 9 de Abril, 1 a 5, 1249-083 Lisboa',
ST_GeographyFromText('SRID=4326;POINT(-9.154124685506888 38.71172554687779 )'),
'213913993','now()','now()','https://cdn.discordapp.com/attachments/1072142135714918516/1103708413701136524/cruzvermelha_logo.jpg'),
('A.A.D.C','2','Rua Cavado, 3 Lumiar, Lisboa',
ST_GeographyFromText('SRID=4326;POINT(-9.190659571164282 38.76989290898343)'),
'919304510',now(),now(),'https://media.discordapp.net/attachments/1072142135714918516/1103706802471829514/Acreditar_logo.jpg?width=360&height=292'),
('Acreditar','2','Rua Professor Lima Bastos 73, Lisboa',
ST_GeographyFromText('SRID=4326;POINT(-9.1609534 38.73958872646722)'),
'217221150',now(),now(),'https://media.discordapp.net/attachments/1072142135714918516/1103706802471829514/Acreditar_logo.jpg?width=360&height=292'),
('Ajuda de Mãe','2','Rua Arco do Carvalhão 282 Lisboa', 
ST_GeographyFromText('SRID=4326;POINT(-9.172504053971387 38.72078007252989)'),
'213827850',now(),now(),'https://media.discordapp.net/attachments/1072142135714918516/1103708895572140052/ajudaMaeLogo.jpg?width=516&height=368'),
('Alzheimer Portugal','2','Av. de Ceuta Norte,Lote 15, 3º Lisboa',
ST_GeographyFromText('SRID=4326;POINT(-9.175079997274104 38.71246091126308)'),
'213610460',now(),now(),'https://media.discordapp.net/attachments/1072142135714918516/1103706850739900456/Alzheimer_logo.jpg?width=178&height=178'),
('Cáritas','1','Av. Sidónio Pais, 20, 5º dto 1050-15 Lisboa',
ST_GeographyFromText('SRID=4326;POINT( -9.151288347584003 38.7310684080154)'),
'213573386',now(),now(),'https://media.discordapp.net/attachments/1072142135714918516/1103706923519447050/caritas.jpg?width=225&height=225');

insert into donativofisico(donativo_quantidade, data_recolha, donativo_observacao, doador_id, org_id, subcategoria_id, created_at, updated_at)
values('1',to_date('2023.05.01','YYYY.MM.DD'),'Ligar antes de pegar','1','1','2','now()','now()');

insert into donativoonline(cartao, cod_cartao, valor, doador_id, org_id, subcategoria_id, titular, data_validade, data_exp, telefone, email)
values('4151650278458681','123','2','1','1','1','Yanessa',to_date('2022.02.26','YYYY.MM.DD'),to_date('2026.02.26','YYYY.MM.DD'),'949925461','yanessa2@gmail.com');


insert into coletas(usr_id, org_id, donativofisico_id, created_at, updated_at)
values('1','1','1','now()','now()');



 

