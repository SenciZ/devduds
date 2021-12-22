


        drop table if exists cc_users;

        create table all_products (
            product_id serial primary key, 
            typeId integer references 
        );

        insert into cc_users (first_name, last_name, email, phone_number)
        values ('Pennie', 'Benazet', 'pbenazet1@tripadvisor.com', '9138673482'),
            ('Dewey', 'Jiracek', 'djiracek3@kickstarter.com', '9604958684'),