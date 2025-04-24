# Some Linear Algebra Theorems

### Rank-Nullity Theorem

Let $T: V \rightarrow W$ be a linear transformation between finite-dimensional vector spaces $V$ and $W$. Then:

$$ \text{dim}(\text{ker}(T)) + \text{dim}(\text{im}(T)) = \text{dim}(V) $$

where:
* $\text{dim}(\text{ker}(T))$ is the dimension of the kernel (null space) of $T$.
* $\text{dim}(\text{im}(T))$ is the dimension of the image (range) of $T$.
* $\text{dim}(V)$ is the dimension of the domain $V$.

### Cayley-Hamilton Theorem

Let $A$ be an $n \times n$ square matrix, and let $p(\lambda) = \det(A - \lambda I)$ be its characteristic polynomial. Then:

$$ p(A) = 0 $$

where $0$ represents the $n \times n$ zero matrix.

### Spectral Theorem (for Symmetric Matrices)

Let $A$ be a real symmetric $n \times n$ matrix. Then:

* $A$ has $n$ real eigenvalues (counting multiplicities).
* There exists an orthogonal matrix $Q$ (i.e., $Q^T Q = I$) such that $Q^T A Q = D$, where $D$ is a diagonal matrix with the eigenvalues of $A$ along the diagonal.
* The eigenvectors corresponding to distinct eigenvalues are orthogonal.

### Fundamental Theorem of Linear Algebra

For an $m \times n$ matrix $A$:

* The row space of $A$ and the null space of $A$ are orthogonal complements in $\mathbb{R}^n$.
* The column space of $A$ and the left null space of $A$ are orthogonal complements in $\mathbb{R}^m$.

In equations:

$$ \text{Row}(A) = \text{Null}(A)^\perp $$
$$ \text{Col}(A) = \text{Null}(A^T)^\perp $$

### Linear Independence Theorem

Given a set of vectors $v_1, v_2, ..., v_n$ in a vector space $V$, the set is linearly independent if and only if the only solution to the equation:

$$c_1v_1 + c_2v_2 + ... + c_nv_n = 0$$

is $c_1 = c_2 = ... = c_n = 0$.

### The Dimension Theorem for Linear Transformations

Let $V$ and $W$ be vector spaces, and let $T: V \rightarrow W$ be a linear transformation. If $V$ is finite-dimensional, then:

$$ \text{rank}(T) + \text{nullity}(T) = \text{dim}(V) $$

where $\text{rank}(T) = \text{dim}(\text{im}(T))$ and $\text{nullity}(T) = \text{dim}(\text{ker}(T))$. This is equivalent to the Rank-Nullity Theorem.

### Theorem on Invertible Matrices

Let $A$ be an $n \times n$ matrix. The following statements are equivalent:

1.  $A$ is invertible.
2.  $A$ is row-equivalent to the $n \times n$ identity matrix $I_n$.
3.  $A$ has $n$ pivot positions.
4.  The equation $Ax = 0$ has only the trivial solution $x = 0$.
5.  The columns of $A$ form a linearly independent set.
6.  The linear transformation $x \mapsto Ax$ is one-to-one.
7.  The equation $Ax = b$ has at least one solution for each $b$ in $\mathbb{R}^n$.
8.  The columns of $A$ span $\mathbb{R}^n$.
9.  The linear transformation $x \mapsto Ax$ maps $\mathbb{R}^n$ onto $\mathbb{R}^n$.
10. There is an $n \times n$ matrix $C$ such that $CA = I_n$.
11. There is an $n \times n$ matrix $D$ such that $AD = I_n$.
12. $A^T$ is an invertible matrix.

### Eigenvalue Decomposition Theorem (for Diagonalizable Matrices)

Let $A$ be an $n \times n$ matrix. Then $A$ is diagonalizable if and only if $A$ has $n$ linearly independent eigenvectors. If $A$ is diagonalizable, then:

$$ A = PDP^{-1} $$

where $D$ is a diagonal matrix whose diagonal entries are the eigenvalues of $A$, and $P$ is an invertible matrix whose columns are the corresponding eigenvectors of $A$.

### Gram-Schmidt Orthogonalization Theorem

Given a basis $\{v_1, v_2, ..., v_n\}$ for a subspace $W$ of $\mathbb{R}^m$, there exists an orthogonal basis $\{u_1, u_2, ..., u_n\}$ for $W$. The vectors $u_i$ are constructed as follows:


$u_1 = v_1$

$u_2 = v_2 - (v_2 · u_1 / u_1 · u_1) u_1$

$u_3 = v_3 - (v_3 · u_1 / u_1 · u_1) u_1 - (v_3 · u_2 / u_2 · u_2) u_2$

$...$

$u_n = v_n - \sum_{j=1}^{n-1}(v_n · u_j / u_j · u_j) u_j$


### Theorem on Determinants and Invertibility

An $n \times n$ matrix $A$ is invertible if and only if $\det(A) \neq 0$.
