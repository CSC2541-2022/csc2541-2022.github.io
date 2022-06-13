out = zeros(10, 1024, 3, 'uint8');
for i=0:19
    I = imread(sprintf('a%d.jpeg', i));
    Ir = imresize(I, [32,32]);
    %out(i+1,:, 1) = reshape(Ir(:,:,1), [1, 1024]);
    %out(i+1,:, 2) = reshape(Ir(:,:,2), [1, 1024]);
    %out(i+1,:, 3) = reshape(Ir(:,:,3), [1, 1024]);
    Ir = imrotate(Ir, 90);
    out(i+1,:,:) = reshape(Ir, [32*32,3]);
end
imwrite(out, 'db.png', 'png');