-- Create the database with the name: myproj
-- Then run the create table bellow

create table appuser (
    usr_id serial Primary key not null,
    usr_name varchar(60) not null,
    usr_pass varchar(200) not null, 
    usr_token varchar(200),
    doador_endereco varchar(400),
    doador_telefone int,
    tipo_aceso bit
);


create table admin(
admin_id serial not null,
privilegio varchar(100),
usr_id int not null,
primary key(admin_id),
FOREIGN KEY (usr_id) REFERENCES appuser(usr_id)
on delete no action on update no action

);

create table organizacao(
org_id serial not null,
org_name varchar(300),
usr_id int not null,
org_endereco varchar(500),
geom geography (Point, 4326),
org_telefone int,
org_img varchar(600),
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key(org_id),
FOREIGN KEY (usr_id) REFERENCES appuser(usr_id)
on delete no action on update no action
);

create table doador(
doador_id serial not null,
usr_id int not null,
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key(doador_id),
FOREIGN KEY (usr_id) REFERENCES appuser(usr_id)
on delete no action on update no action
);



create table categoria(
categoria_id serial not null,
categoria_name varchar(100),
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key(categoria_id)
);

create table subcategoria(
subcategoria_id serial not null,
item varchar(100),
descricao varchar(300),
categoria_id int not null,
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key(subcategoria_id),
FOREIGN KEY (categoria_id) REFERENCES categoria(categoria_id)
on delete no action on update no action

);

create table donativoonline(
donativoonline_id serial not null,
cod_cartao int,
valor varchar(500),
cartao varchar(400),
titular varchar(500),
doador_id int not null,
org_id int not null,
subcategoria_id int not null,
data_validade date,
data_exp date,
telefone int,
email varchar(300),
primary key(donativoonline_id),
FOREIGN KEY (doador_id) REFERENCES doador(doador_id)
on delete no action on update no action,
FOREIGN KEY (org_id) REFERENCES organizacao(org_id)
on delete no action on update no action,
FOREIGN KEY (subcategoria_id) REFERENCES subcategoria(subcategoria_id)
on delete no action on update no action
);

create table donativofisico(
donativofisico_id serial not null,
donativo_quantidade int,
data_recolha date,
donativo_observacao varchar(400),
doador_id int not null,
org_id int not null,
subcategoria_id int not null,
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key(donativofisico_id),
FOREIGN KEY (doador_id) REFERENCES doador(doador_id)
on delete no action on update no action,
FOREIGN KEY (subcategoria_id) REFERENCES subcategoria(subcategoria_id)
on delete no action on update no action,
FOREIGN KEY (org_id) REFERENCES organizacao(org_id)
on delete no action on update no action
);


create table coletas(
coleta_id serial not null,
usr_id int,
org_id int,
donativofisico_id int not null,
created_at timestamp without time zone,
updated_at timestamp without time zone,
primary key(coleta_id),
FOREIGN KEY (usr_id) REFERENCES appuser(usr_id)
on delete no action on update no action,
FOREIGN KEY (org_id) REFERENCES organizacao(org_id)
on delete no action on update no action,
FOREIGN KEY (donativofisico_id) REFERENCES donativofisico(donativofisico_id)
on delete no action on update no action
);


create table campanha(
    campanha_id serial not null,
    nome_evento varchar(100),
    data_inicio date,
    data_termino date,
    campanha_observacao varchar(300),
    admin_id int not null ,
    org_id int not null,
    created_at timestamp without time zone,
updated_at timestamp without time zone,
 primary key(campanha_id),
 foreign key (admin_id) REFERENCES admin(admin_id)
on delete no action on update no action,
foreign key (org_id) REFERENCES organizacao(org_id)
on delete no action on update no action
);

create table boxmensagem(
    box_id serial not null,
    questao varchar(500),
    resposta  varchar(500),
    envio varchar(200),
    admin_id int not null,
    doador_id int not null,
    created_at timestamp without time zone,
updated_at timestamp without time zone,
 primary key (box_id) ,
 foreign key (admin_id) REFERENCES admin(admin_id)
on delete no action on update no action,
foreign key (doador_id) REFERENCES doador(doador_id)
on delete no action on update no action
);
