SELECT u.id as id, u.name as name, p.parent_name as parent_name 
FROM user u 
LEFT JOIN parents p 
ON u.parent_id = p.id 