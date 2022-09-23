<?php
include __DIR__ . '/../database/api.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP dischi</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/M6Irinel/Framkcss@fe19a446685bc7be1640b8e44a566588f68cdbc7/Framkcss-light.css">

    <link rel="stylesheet" href="../assets-global/css/style.css">
</head>

<body class="reset flex f-column">

    <header class="sticky top left right">
        <section>
            <nav>
                <div class="p-2">
                    <div class="logo">
                        <a href="#">
                            <img src="../assets-global/img/logo-small.svg" alt="logo spotify">
                        </a>
                    </div>
                </div>
            </nav>
        </section>
    </header>

    <main>
        <section>
            <div class="container py-20">
                <div>
                    <ul class="p-3 p-0-sm row-10-sm row-md row-10-xl gap-30">
                        <?php foreach ($response as $v) { ?>
                            <li class="g-col-5-sm g-col-4-md g-col-3-lg g-col-2-xl t-center p-3 flex f-column scale-H transition-all duration-2 rounded-2-H ease-in">

                                <div class="h-50 mb-3 f-col-6">
                                    <img class="fluid-img d-block obj-cover" src="<?= $v['poster'] ?>" alt="<?= $v['title'] ?>">
                                </div>

                                <h2 class="white px-5 py-5 lato">
                                    <?= strtoupper($v['title']); ?>
                                </h2>

                                <h4 class="gray-5 pb-1 lato">
                                    <?= $v['author'] ?>
                                </h4>

                                <p class="gray-5 lato">
                                    <?= $v['year'] ?>
                                </p>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            </div>
        </section>
    </main>


</body>

</html>