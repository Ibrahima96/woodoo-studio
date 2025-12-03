# Commandes Git Essentielles

## Configuration Initiale

```bash
# Configurer votre nom
git config --global user.name "Votre Nom"

# Configurer votre email
git config --global user.email "votre.email@example.com"

# Voir la configuration
git config --list
```

## Initialisation et Clonage

```bash
# Initialiser un nouveau dépôt
git init

# Cloner un dépôt existant
git clone <url>
```

## Branches

```bash
# Lister les branches
git branch

# Créer une nouvelle branche
git branch <nom-branche>

# Créer et basculer sur une nouvelle branche
git checkout -b <nom-branche>

# Basculer sur une branche existante
git checkout <nom-branche>

# Renommer la branche actuelle
git branch -m <nouveau-nom>

# Supprimer une branche locale
git branch -d <nom-branche>

# Supprimer une branche locale (force)
git branch -D <nom-branche>

# Supprimer une branche distante
git push origin --delete <nom-branche>
```

## Changements et Commits

```bash
# Voir le statut des fichiers
git status

# Ajouter un fichier au staging
git add <fichier>

# Ajouter tous les fichiers modifiés
git add .

# Ajouter tous les fichiers (nouveaux, modifiés, supprimés)
git add -A

# Retirer un fichier du staging
git restore --staged <fichier>

# Commiter les changements
git commit -m "Message du commit"

# Modifier le dernier commit
git commit --amend

# Voir l'historique des commits
git log

# Voir l'historique (format compact)
git log --oneline

# Voir les différences non stagées
git diff

# Voir les différences stagées
git diff --staged
```

## Synchronisation avec le Dépôt Distant

```bash
# Ajouter un dépôt distant
git remote add origin <url>

# Voir les dépôts distants
git remote -v

# Récupérer les changements du distant (sans merge)
git fetch

# Récupérer et fusionner les changements
git pull

# Envoyer les commits vers le distant
git push

# Envoyer une nouvelle branche vers le distant
git push -u origin <nom-branche>

# Forcer un push (attention!)
git push --force
```

## Fusion et Rebase

```bash
# Fusionner une branche dans la branche actuelle
git merge <nom-branche>

# Rebaser la branche actuelle
git rebase <nom-branche>

# Annuler un merge en cours
git merge --abort

# Annuler un rebase en cours
git rebase --abort
```

## Annulation de Changements

```bash
# Annuler les modifications d'un fichier non stagé
git restore <fichier>

# Annuler tous les changements non stagés
git restore .

# Revenir à un commit précédent (conserve l'historique)
git revert <commit-hash>

# Revenir à un commit précédent (réécrit l'historique)
git reset --hard <commit-hash>

# Annuler le dernier commit (garder les changements)
git reset --soft HEAD~1

# Annuler le dernier commit (supprimer les changements)
git reset --hard HEAD~1
```

## Stash (Mise en Réserve)

```bash
# Mettre les changements en réserve
git stash

# Mettre en réserve avec un message
git stash save "Message"

# Lister les stash
git stash list

# Appliquer le dernier stash
git stash apply

# Appliquer et supprimer le dernier stash
git stash pop

# Supprimer un stash spécifique
git stash drop stash@{0}

# Supprimer tous les stash
git stash clear
```

## Tags

```bash
# Créer un tag
git tag <nom-tag>

# Créer un tag annoté
git tag -a <nom-tag> -m "Message"

# Lister les tags
git tag

# Envoyer un tag vers le distant
git push origin <nom-tag>

# Envoyer tous les tags
git push origin --tags

# Supprimer un tag local
git tag -d <nom-tag>

# Supprimer un tag distant
git push origin --delete <nom-tag>
```

## Informations et Inspection

```bash
# Voir l'historique d'un fichier
git log -- <fichier>

# Voir qui a modifié chaque ligne d'un fichier
git blame <fichier>

# Voir les détails d'un commit
git show <commit-hash>

# Voir les branches distantes
git branch -r

# Voir toutes les branches (locales et distantes)
git branch -a
```

## Nettoyage

```bash
# Supprimer les branches locales déjà mergées
git branch --merged | grep -v "\*" | xargs -n 1 git branch -d

# Nettoyer les références distantes obsolètes
git remote prune origin

# Nettoyer les fichiers non trackés (preview)
git clean -n

# Nettoyer les fichiers non trackés (exécution)
git clean -f

# Nettoyer fichiers et dossiers non trackés
git clean -fd
```

## Workflow Courant

```bash
# 1. Créer une nouvelle branche pour une fonctionnalité
git checkout -b feature/ma-fonctionnalite

# 2. Faire des modifications et les commiter
git add .
git commit -m "Ajout de ma fonctionnalité"

# 3. Pousser la branche vers le distant
git push -u origin feature/ma-fonctionnalite

# 4. Revenir sur main et fusionner
git checkout main
git merge feature/ma-fonctionnalite

# 5. Pousser main vers le distant
git push

# 6. Supprimer la branche de fonctionnalité
git branch -d feature/ma-fonctionnalite
git push origin --delete feature/ma-fonctionnalite
```

## Commandes Utiles

```bash
# Voir le graphe des branches
git log --graph --oneline --all

# Chercher dans les commits
git log --grep="mot-clé"

# Voir les fichiers modifiés dans un commit
git show --name-only <commit-hash>

# Créer un alias
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```
